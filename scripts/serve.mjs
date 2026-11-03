// Local preview that mimics Cloudflare Pages: extensionless URLs, .html → clean redirect, 404.html fallback.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve(import.meta.dirname, '../dist');
const port = Number(process.argv[2] || process.env.PORT || 8788);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.ico': 'image/png', '.webmanifest': 'application/manifest+json' };
const redirects = fs.existsSync(path.join(dist, '_redirects')) ? fs.readFileSync(path.join(dist, '_redirects'), 'utf8').split('\n').filter(Boolean).map((l) => l.split(/\s+/)) : [];

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x'); let p = decodeURIComponent(url.pathname);
  for (const [from, to] of redirects) {
    const re = new RegExp('^' + from.replace(/\*/g, '.*').replace(/:\w+/g, '[^/]+') + '$');
    if (re.test(p)) { res.writeHead(301, { Location: to }); return res.end(); }
  }
  if (p.endsWith('.html') && p !== '/404.html') { res.writeHead(308, { Location: p.slice(0, -5).replace(/\/index$/, '/') || '/' }); return res.end(); }
  const cands = [p, p + '.html', path.join(p, 'index.html')];
  for (const c of cands) {
    const f = path.join(dist, c);
    if (f.startsWith(dist) && fs.existsSync(f) && fs.statSync(f).isFile()) {
      res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' });
      return fs.createReadStream(f).pipe(res);
    }
  }
  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(fs.readFileSync(path.join(dist, '404.html')));
}).listen(port, () => console.log(`http://localhost:${port}`));
