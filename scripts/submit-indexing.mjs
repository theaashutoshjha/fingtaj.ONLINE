// Script to submit all FingTaj URLs to IndexNow for instant search engine indexing
import https from 'https';

const host = 'fingtaj.online';
const key = 'c7e2b8f64a1d9e5b3f0c8e2a1b4d7f9e';
const keyLocation = `https://${host}/${key}.txt`;

const urls = [
  'https://fingtaj.online/',
  'https://fingtaj.online/sip-calculator',
  'https://fingtaj.online/step-up-sip-calculator',
  'https://fingtaj.online/loan-emi-calculator',
  'https://fingtaj.online/income-tax-calculator',
  'https://fingtaj.online/ppf-calculator',
  'https://fingtaj.online/cagr-calculator',
  'https://fingtaj.online/nps-calculator',
  'https://fingtaj.online/inflation-adjusted-return-calculator',
  'https://fingtaj.online/fd-calculator',
  'https://fingtaj.online/rd-calculator',
  'https://fingtaj.online/hra-calculator',
  'https://fingtaj.online/gratuity-calculator',
  'https://fingtaj.online/capital-gains-tax-calculator',
  'https://fingtaj.online/section-44ada-calculator',
  'https://fingtaj.online/articles',
  'https://fingtaj.online/articles/how-loan-emi-is-calculated',
  'https://fingtaj.online/articles/sip-vs-lump-sum-investing',
  'https://fingtaj.online/articles/step-up-sip-wealth-accelerator',
  'https://fingtaj.online/articles/new-vs-old-tax-regime',
  'https://fingtaj.online/articles/understanding-real-vs-nominal-returns',
  'https://fingtaj.online/articles/ppf-rules-interest-calculation-guide',
  'https://fingtaj.online/about',
  'https://fingtaj.online/methodology',
  'https://fingtaj.online/privacy-policy',
  'https://fingtaj.online/cookie-policy',
  'https://fingtaj.online/disclaimer',
  'https://fingtaj.online/terms-of-service',
  'https://fingtaj.online/contact'
];

const payload = JSON.stringify({
  host,
  key,
  keyLocation,
  urlList: urls
});

function postIndexNow(endpoint) {
  return new Promise((resolve) => {
    const urlObj = new URL(endpoint);
    const options = {
      hostname: urlObj.hostname,
      port: 443,
      path: urlObj.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (d) => { body += d; });
      res.on('end', () => {
        resolve({ endpoint, statusCode: res.statusCode, body });
      });
    });

    req.on('error', (err) => {
      resolve({ endpoint, error: err.message });
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  console.log(`Submitting ${urls.length} URLs to IndexNow endpoints...`);
  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow'
  ];

  for (const ep of endpoints) {
    const res = await postIndexNow(ep);
    console.log(`Endpoint: ${ep} => Status: ${res.statusCode || res.error} ${res.body || ''}`);
  }
}

main();
