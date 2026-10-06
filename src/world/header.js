// header.js
const headerHTML = `

<header>
<div class="header-links">
    <div class="dropdown">
      <h3><a href="../about.html" class="about-link">ARCS</a></h3>
      <div class="dropdown-content">
        <a href="../arcgreed.html">GREED</a>
        <a href="../arcsloth.html">SLOTH</a>
        <a href="../arcwrath.html">WRATH</a>
        <a href="../arclust.html">LUST</a>
        <a href="../arcgluttony.html">GLUTTONY</a>
        <a href="../arcenvy.html">ENVY</a>
        <a href="../arcpride.html">PRIDE</a>

      </div>
    </div>
    <div class="dropdown">
      <h3><a href="../map.html" class="map-link">WORLD</a></h3>
      <div class="dropdown-content">
        <a href="#">Region 1</a>
        <a href="#">Region 2</a>
        <a href="#">Region 3</a>
      </div>
    </div>
    <div class="dropdown">
      <h3><a href="../factions.html" class="factions-link">AREAS</a></h3>
      <div class="dropdown-content">
        <a href="#">Area 1</a>
        <a href="#">Area 2</a>
        <a href="#">Area 3</a>
      </div>
    </div>
      <h3><a href="../characters.html" class="characters-link">CHARACTERS</a></h3>
  </div>
</header>  

`;
document.getElementById('header-placeholder').innerHTML = headerHTML;