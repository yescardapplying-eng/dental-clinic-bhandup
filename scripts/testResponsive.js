const puppeteer = require('puppeteer-core');
const fs = require('fs');

const widths = [320, 360, 375, 390, 430, 768, 1024, 1280, 1440];
const pages = [
  '/',
  '/about',
  '/services',
  '/services/root-canal-treatment',
  '/services/dental-implants',
  '/services/teeth-cleaning',
  '/reviews',
  '/gallery',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/medical-disclaimer'
];

const chromePath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function testAll() {
  console.log('Launching browser from:', chromePath);
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  let totalErrors = 0;

  for (const urlPath of pages) {
    for (const w of widths) {
      await page.setViewport({ width: w, height: 800 });
      await page.goto(`http://localhost:3000${urlPath}`, { waitUntil: 'domcontentloaded' });

      // Check overflow
      const overflowInfo = await page.evaluate(() => {
        const docWidth = document.documentElement.clientWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const bodyScrollWidth = document.body.scrollWidth;

        let overflowingElements = [];
        if (scrollWidth > docWidth || bodyScrollWidth > docWidth) {
          const allElements = document.querySelectorAll('*');
          for (const el of allElements) {
            const rect = el.getBoundingClientRect();
            if (rect.right > docWidth + 1) {
              overflowingElements.push({
                tag: el.tagName,
                class: el.className,
                id: el.id,
                right: rect.right,
                docWidth
              });
              if (overflowingElements.length >= 3) break;
            }
          }
        }

        return {
          docWidth,
          scrollWidth,
          bodyScrollWidth,
          hasOverflow: scrollWidth > docWidth || bodyScrollWidth > docWidth,
          overflowingElements
        };
      });

      if (overflowInfo.hasOverflow) {
        console.error(`[OVERFLOW ERROR] ${urlPath} at width ${w}px! docWidth=${overflowInfo.docWidth}, scrollWidth=${overflowInfo.scrollWidth}`);
        console.error('Details:', JSON.stringify(overflowInfo.overflowingElements));
        totalErrors++;
      }
    }
    console.log(`✓ Tested ${urlPath} across all widths (320px -> 1440px)`);
  }

  await browser.close();

  if (totalErrors === 0) {
    console.log('CONGRATULATIONS: 0 horizontal overflow errors across all viewports!');
  } else {
    console.error(`TOTAL ERRORS: ${totalErrors}`);
    process.exit(1);
  }
}

testAll().catch(e => {
  console.error('Test failed:', e);
  process.exit(1);
});

