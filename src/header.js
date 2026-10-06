const headerHTML = `
<header>
  <a href="/index.html" class="home-logo">RETROGRADE</a>
  <div class="header-links">
    <h3><a href="/index.html">HOME</a></h3>
    <h3><a href="/lore/introduction">ABOUT</a></h3>
    <h3><a href="/lore/">LORE</a></h3>
    <h3><a href="/map.html">MAP</a></h3>
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
