// header.js
const headerHTML = `

<header>
<div class="header-links">
      <h3><a href="../home.html" >HOME</a></h3>
    <div class="dropdown">
      <h3><a href="../arcs.html" >ARCS</a></h3>
    </div>
    <div class="dropdown">
      <h3><a href="../intro.html" >LORE</a></h3>
    </div>
      <h3><a href="../map.html" >MAP</a></h3>
      <h3><a href="../characters.html" >CHARACTERS</a></h3>
  </div>
</header>  


`
;
document.getElementById('header-placeholder').innerHTML = headerHTML;

if (window.initHoverSounds) {
  window.initHoverSounds();
}

const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://use.typekit.net/zce6xzy.css';
document.head.appendChild(fontLink);

 /*
      <div class="dropdown-content">
        <a href="../arcgreed.html">GREED</a>
        <a href="../arcsloth.html">SLOTH</a>
        <a href="../arcwrath.html">WRATH</a>
        <a href="../arclust.html">LUST</a>
        <a href="../arcgluttony.html">GLUTTONY</a>
        <a href="../arcenvy.html">ENVY</a>
        <a href="../arcpride.html">PRIDE</a>

      </div>
    */