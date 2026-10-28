const fs = require('fs');

const content = fs.readFileSync('src/data/clinicData.ts', 'utf8');

// Match homepage FAQs
const homeMatch = content.match(/export const homepageFaqs: FAQItem\[\] = \[([\s\S]*?)\];\s*\/\//);
if (homeMatch) {
  const count = (homeMatch[1].match(/question:/g) || []).length;
  console.log(`Homepage FAQs count: ${count} (expected 6) -> ${count === 6 ? 'PASS' : 'FAIL'}`);
}

// Match services
const serviceSections = content.split('slug:').slice(1);
console.log(`Total services defined: ${serviceSections.length} (expected 10)`);

serviceSections.forEach((sec, idx) => {
  const titleMatch = sec.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : `Service ${idx + 1}`;
  
  const descMatch = sec.match(/shortDesc:\s*"([^"]+)"/);
  const desc = descMatch ? descMatch[1] : '';
  const wordCount = desc.trim().split(/\s+/).length;
  
  const faqsBlock = sec.match(/faqs:\s*\[([\s\S]*?)\]/);
  const faqCount = faqsBlock ? (faqsBlock[1].match(/question:/g) || []).length : 0;
  
  const wordsOk = wordCount >= 10 && wordCount <= 18;
  const faqsOk = faqCount === 3;
  
  console.log(`[${idx + 1}] ${title.padEnd(25)} | Words: ${wordCount} (10-18): ${wordsOk ? 'PASS' : 'FAIL'} | FAQs: ${faqCount} (3): ${faqsOk ? 'PASS' : 'FAIL'}`);
});

// Footer intro count
const footerContent = fs.readFileSync('src/components/Footer.tsx', 'utf8');
const footerIntroMatch = footerContent.match(/Modern dental practice in Bhandup West dedicated to gentle treatments, preventive oral health, and personalized family care\./);
if (footerIntroMatch) {
  const introWords = footerIntroMatch[0].trim().split(/\s+/).length;
  console.log(`Footer Intro words: ${introWords} (15-18) -> ${introWords >= 15 && introWords <= 18 ? 'PASS' : 'FAIL'}`);
}

// Hero paragraph count
const homePageContent = fs.readFileSync('src/app/page.tsx', 'utf8');
const heroMatch = homePageContent.match(/Providing gentle, ethical dental treatments with advanced sterilization, modern equipment, and personalized care for your entire family\./);
if (heroMatch) {
  const heroWords = heroMatch[0].trim().split(/\s+/).length;
  console.log(`Hero paragraph words: ${heroWords} (12-25) -> ${heroWords >= 12 && heroWords <= 25 ? 'PASS' : 'FAIL'}`);
}
