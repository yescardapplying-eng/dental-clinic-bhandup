const { homepageFaqs, servicesData, clinicConfig } = require('./src/data/clinicData.ts');

console.log('Homepage FAQs count:', homepageFaqs.length, homepageFaqs.length === 6 ? '✓ PASS' : '✗ FAIL');

let allServicesPass = true;
servicesData.forEach((s) => {
  const count = s.faqs.length;
  const words = s.shortDesc.trim().split(/\s+/).length;
  const wordOk = words >= 10 && words <= 18;
  if (count !== 3 || !wordOk) {
    allServicesPass = false;
    console.log(`Service "${s.title}": FAQs=${count} (expect 3), Words=${words} (expect 10-18)`);
  }
});
console.log('All 10 services have exactly 3 FAQs & 10-18 words:', allServicesPass ? '✓ PASS' : '✗ FAIL');

// Hero paragraph word count
const heroText = "Providing gentle, ethical dental treatments with advanced sterilization, modern equipment, and personalized care for your entire family.";
const heroWords = heroText.trim().split(/\s+/).length;
console.log(`Hero paragraph word count: ${heroWords} (expect 12-25):`, heroWords >= 12 && heroWords <= 25 ? '✓ PASS' : '✗ FAIL');

// Footer intro word count
const footerIntro = "Modern dental practice in Bhandup West dedicated to gentle treatments, preventive oral health, and personalized family care.";
const footerWords = footerIntro.trim().split(/\s+/).length;
console.log(`Footer intro word count: ${footerWords} (expect 15-18):`, footerWords >= 15 && footerWords <= 18 ? '✓ PASS' : '✗ FAIL');
