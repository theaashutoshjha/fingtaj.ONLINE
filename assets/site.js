// Site-wide behaviour: mobile menu, search overlay, cookie/consent notice. No dependencies.
(function () {
  var d = document;
  var menu = d.querySelector('.menu'), nav = d.getElementById('nav');
  if (menu && nav) menu.addEventListener('click', function () {
    var o = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', o);
  });

  // ---- search ----
  var ov = d.getElementById('search-ov'), input = ov && ov.querySelector('input'), list = ov && ov.querySelector('ul'), idx = null;
  function open() {
    ov.classList.add('open'); input.value = ''; input.focus(); render('');
    if (!idx) fetch('/search-index.json').then(function (r) { return r.json(); }).then(function (j) { idx = j; render(input.value); });
  }
  function close() { ov.classList.remove('open'); }
  function render(q) {
    if (!idx) { list.innerHTML = '<li><a href="#">Loading…</a></li>'; return; }
    var t = q.toLowerCase().split(/\s+/).filter(Boolean), res;
    if (!t.length) res = idx.filter(function (x) { return x.p; }).slice(0, 8);
    else res = idx.map(function (x) {
      var h = (x.t + ' ' + x.k).toLowerCase(), s = 0;
      t.forEach(function (w) { if (x.t.toLowerCase().indexOf(w) > -1) s += 3; else if (h.indexOf(w) > -1) s += 1; else s -= 99; });
      return { x: x, s: s };
    }).filter(function (r) { return r.s > 0; }).sort(function (a, b) { return b.s - a.s; }).slice(0, 10).map(function (r) { return r.x; });
    list.innerHTML = res.length ? res.map(function (x) { return '<li><a href="' + x.u + '">' + x.t.replace(/</g, '&lt;') + '<small>' + (x.c === 'c' ? 'Calculator' : 'Guide') + '</small></a></li>'; }).join('') : '<li><a href="#">No results — try “SIP”, “EMI” or “CIBIL”.</a></li>';
  }
  d.querySelectorAll('[data-search]').forEach(function (b) { b.addEventListener('click', open); });
  if (ov) {
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    input.addEventListener('input', function () { render(input.value); });
    d.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
      if ((e.key === '/' && !/input|textarea|select/i.test((e.target.tagName || ''))) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) { e.preventDefault(); open(); }
    });
  }

  // ---- consent ----
  var bar = d.getElementById('cookie'), KEY = 'fg-consent', saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  function apply(v) {
    if (typeof window.gtag !== 'function') return;
    var s = v === 'granted' ? 'granted' : 'denied';
    window.gtag('consent', 'update', { ad_storage: s, analytics_storage: s, ad_user_data: s, ad_personalization: s });
  }
  if (saved) apply(saved); else if (bar) bar.classList.add('show');
  function choose(v) { try { localStorage.setItem(KEY, v); } catch (e) {} apply(v); if (bar) bar.classList.remove('show'); }
  d.querySelectorAll('[data-consent]').forEach(function (b) { b.addEventListener('click', function () { choose(b.getAttribute('data-consent')); }); });
})();
