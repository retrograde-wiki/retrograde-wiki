const headerHTML = `
<header>
  <a href="/index.html" class="home-logo">RETROGRADE</a>
  <div class="header-links">
    <h3><a href="/index.html">HOME</a></h3>
    <h3><a href="/about.html">ABOUT</a></h3>
    <h3><a href="/lore/">LORE</a></h3>
    <h3><a href="/map.html">ZONES</a></h3>
    <h3><a href="/monoliths.html">MONOLITHS</a></h3>
    <h3><a href="/characters.html">CHARACTERS</a></h3>
    <h3><a href="/gallery.html">GALLERY</a></h3>
    <h3><a href="#" id="winamp-toggle" title="Music">♫</a></h3>
  </div>
</header>
`;
document.getElementById('header-placeholder').innerHTML = headerHTML;

if (window.initHoverSounds) {
  window.initHoverSounds();
}

const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://use.typekit.net/zce6xzy.css';
document.head.appendChild(fontLink);

const winampScript = document.createElement('script');
winampScript.src = '/style/winamp.js';
document.body.appendChild(winampScript);

(function () {
  var path = location.pathname.replace(/index\.html$/, '');
  document.querySelectorAll('.header-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href || href === '#') return;
    var h = href.replace(/index\.html$/, '');
    var section = h.replace(/\.html$/, '/');
    var match = (h === '/')
      ? path === '/'
      : (path === h || path.indexOf(section) === 0);
    if (match) a.classList.add('current');
  });
})();

// Outline the button for the current page/section (exact match wins)
(function () {
  var path = location.pathname.replace(/index\.html$/, '');
  var links = Array.from(document.querySelectorAll('.header-links a')).filter(function (a) {
    var href = a.getAttribute('href');
    return href && href !== '#';
  });

  function clean(a) { return a.getAttribute('href').replace(/index\.html$/, ''); }

  var exact = links.filter(function (a) { return clean(a) === path; });

  if (exact.length) {
    exact.forEach(function (a) { a.classList.add('current'); });
    return;
  }

  links.forEach(function (a) {
    var h = clean(a);
    if (h === '/') return;
    var section = h.replace(/\.html$/, '/');
    if (path.indexOf(section) === 0) a.classList.add('current');
  });
})();

// Gallery lightbox: click an image to see it full size
document.addEventListener('click', function (e) {
  var img = e.target.closest('.gallery img');
  if (!img) return;

  var box = document.createElement('div');
  box.className = 'lightbox';
  var big = document.createElement('img');
  big.src = img.currentSrc || img.src;
  big.alt = img.alt;
  box.appendChild(big);
  document.body.appendChild(box);

  function close() {
    box.remove();
    document.removeEventListener('keydown', onKey);
  }
  function onKey(ev) { if (ev.key === 'Escape') close(); }

  box.addEventListener('click', close);
  document.addEventListener('keydown', onKey);
});
