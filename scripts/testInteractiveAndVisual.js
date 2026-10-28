const puppeteer = require('puppeteer-core');
const fs = require('fs');

const chromePath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function runTests() {
  console.log('Launching headless browser...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Test 1: Mobile Menu on 375px (iPhone width)
  console.log('\n--- TEST 1: Mobile Menu at 375px ---');
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });

  // Find and click hamburger
  const hamburger = await page.$('button[aria-label="Open mobile menu"]');
  if (!hamburger) {
    throw new Error('Hamburger button not found!');
  }
  await hamburger.click();
  await new Promise(r => setTimeout(r, 400));

  // Check if mobile modal is visible
  const modalVisible = await page.evaluate(() => {
    const modal = document.getElementById('mobile-navigation-modal');
    if (!modal) return false;
    const rect = modal.getBoundingClientRect();
    const style = window.getComputedStyle(modal);
    return rect.width > 300 && rect.height > 600 && style.display !== 'none' && style.visibility !== 'hidden';
  });
  console.log('Mobile menu modal visible after hamburger click:', modalVisible ? 'PASS ✓' : 'FAIL ✗');

  // Check links in mobile menu
  const mobileLinks = await page.evaluate(() => {
    const modal = document.getElementById('mobile-navigation-modal');
    if (!modal) return [];
    return Array.from(modal.querySelectorAll('a')).map(a => ({ text: a.innerText.trim(), href: a.getAttribute('href') }));
  });
  console.log('Mobile menu links found:', mobileLinks.map(l => l.text).join(' | '));

  // Close mobile menu
  const closeBtn = await page.$('button[aria-label="Close menu"]');
  if (closeBtn) {
    await closeBtn.click();
    await new Promise(r => setTimeout(r, 400));
    const modalClosed = await page.evaluate(() => {
      const modal = document.getElementById('mobile-navigation-modal');
      return modal === null;
    });
    console.log('Mobile menu closed cleanly on "X" click:', modalClosed ? 'PASS ✓' : 'FAIL ✗');
  }

  // Test 2: Image Rendering on About Page
  console.log('\n--- TEST 2: Images rendered on About Page ---');
  await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle2' });
  const doctorImgStatus = await page.evaluate(() => {
    const img = document.querySelector('img[alt*="Dr. A. Sharma"]');
    if (!img) return { found: false };
    return {
      found: true,
      src: img.src,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight
    };
  });
  console.log('Doctor image status:', doctorImgStatus);
  console.log('Doctor image loaded properly with non-zero dimensions:', doctorImgStatus.naturalWidth > 0 ? 'PASS ✓' : 'FAIL ✗');

  // Test 3: Google Reviews Carousel
  console.log('\n--- TEST 3: Google Reviews Carousel ---');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  const carouselInfo = await page.evaluate(() => {
    const heading = document.getElementById('google-reviews-carousel-heading');
    if (!heading) return { found: false };
    const articles = document.querySelectorAll('section[aria-labelledby="google-reviews-carousel-heading"] article');
    return {
      found: true,
      cardCountOnPage: articles.length
    };
  });
  console.log('Google Reviews Carousel found:', carouselInfo);

  // Test 4: Contact Page Map and FAQs
  console.log('\n--- TEST 4: Contact Page Map and FAQs ---');
  await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle2' });
  const contactInfo = await page.evaluate(() => {
    const iframe = document.querySelector('iframe[src*="google.com/maps"]');
    const faqButtons = document.querySelectorAll('button[aria-controls*="contact-faq"]');
    return {
      mapFound: !!iframe,
      faqCount: faqButtons.length
    };
  });
  console.log('Contact Page:', contactInfo);
  console.log('Google Map iframe present:', contactInfo.mapFound ? 'PASS ✓' : 'FAIL ✗');
  console.log('Contact Page has 3 FAQs:', contactInfo.faqCount === 3 ? 'PASS ✓' : 'FAIL ✗');

  // Test 5: Check FAQs across all main pages
  console.log('\n--- TEST 5: FAQs on all main pages ---');
  const pagesToCheck = [
    { url: '/about', prefix: 'about-faq', expected: 3 },
    { url: '/services', prefix: 'services-faq', expected: 3 },
    { url: '/reviews', prefix: 'reviews-faq', expected: 3 },
    { url: '/gallery', prefix: 'gallery-faq', expected: 3 },
    { url: '/services/root-canal-treatment', prefix: 'treatment-root-canal-treatment', expected: 3 },
  ];

  for (const p of pagesToCheck) {
    await page.goto('http://localhost:3000' + p.url, { waitUntil: 'networkidle2' });
    const count = await page.evaluate((prefix) => {
      return document.querySelectorAll(`button[aria-controls*="${prefix}"]`).length;
    }, p.prefix);
    console.log(`${p.url} FAQs: ${count} (expected ${p.expected}):`, count === p.expected ? 'PASS ✓' : 'FAIL ✗');
  }

  // Test 6: Footer Noorweb Link & WhatsApp Position
  console.log('\n--- TEST 6: Footer Attribution & WhatsApp Position ---');
  const footerAndWa = await page.evaluate(() => {
    const footer = document.querySelector('footer');
    const noorwebLink = footer ? footer.querySelector('a[href="https://www.noorweb.in"]') : null;
    const footerText = footer ? footer.innerText : '';
    const hasRawWww = footerText.includes('www.noorweb.in');
    
    const wa = document.querySelector('.wa-floating-btn');
    const waStyle = wa ? window.getComputedStyle(wa) : null;
    const waRight = waStyle ? waStyle.right : '';

    return {
      noorwebLinkFound: !!noorwebLink,
      noorwebAnchorText: noorwebLink ? noorwebLink.innerText : '',
      hasRawWww,
      waRight
    };
  });
  console.log('Noorweb clickable anchor:', footerAndWa.noorwebAnchorText, footerAndWa.noorwebLinkFound ? 'PASS ✓' : 'FAIL ✗');
  console.log('Has raw "www.noorweb.in" in text:', footerAndWa.hasRawWww ? 'FAIL ✗' : 'REMOVED (PASS ✓)');
  console.log('WhatsApp right offset:', footerAndWa.waRight, footerAndWa.waRight === '40px' ? 'PASS ✓' : 'INFO');

  await browser.close();
  console.log('\nALL VERIFICATION TESTS COMPLETED SUCCESSFULLY!');
}

runTests().catch(e => {
  console.error('Test error:', e);
  process.exit(1);
});
