const http = require('http');

const routes = [
  '/',
  '/about',
  '/services',
  '/services/root-canal-treatment',
  '/services/dental-implants',
  '/services/teeth-cleaning',
  '/services/braces-and-aligners',
  '/services/teeth-whitening',
  '/services/crowns-and-bridges',
  '/services/gum-treatment',
  '/services/tooth-extraction',
  '/services/wisdom-tooth-treatment',
  '/services/pediatric-dentistry',
  '/reviews',
  '/gallery',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/medical-disclaimer'
];

async function fetchRoute(path) {
  return new Promise((resolve) => {
    http.get('http://localhost:3000' + path, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ path, html: data }));
    });
  });
}

async function run() {
  const forbiddenPhrases = [
    'demo',
    'sample project',
    'template preview',
    'demonstration',
    'sample website',
    'demo website',
    'placeholder',
    'mockup'
  ];

  let issueCount = 0;

  for (const r of routes) {
    const { path, html } = await fetchRoute(r);
    // remove HTML comments, scripts, styles to check user-facing text
    const textOnly = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ');

    for (const phrase of forbiddenPhrases) {
      const regex = new RegExp(`\\b${phrase}\\b`, 'i');
      if (regex.test(textOnly)) {
        console.warn(`WARNING: Found "${phrase}" in text of ${path}`);
        issueCount++;
      }
    }
  }

  if (issueCount === 0) {
    console.log('SUCCESS: Zero forbidden words found in any page text!');
  } else {
    console.warn(`Total issues found: ${issueCount}`);
  }
}

run();

