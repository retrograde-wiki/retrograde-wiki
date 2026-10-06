(function () {
  var KEY = 'retrograde-age-ok';

  try {
    if (localStorage.getItem(KEY) === 'yes') return;
  } catch (e) {}

  var gate = document.createElement('div');
  gate.className = 'age-gate';
  gate.innerHTML =
    '<div class="age-gate-box">' +
      '<h2>CONTENT WARNING</h2>' +
      '<p>This project is intended for ages <b>16+</b>. It contains mature themes.</p>' +
      '<div class="age-gate-buttons">' +
        '<button id="age-accept">I AM 16+ / ENTER</button>' +
        '<button id="age-leave">LEAVE</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(gate);

  document.getElementById('age-accept').onclick = function () {
    try { localStorage.setItem(KEY, 'yes'); } catch (e) {}
    gate.remove();
  };

  document.getElementById('age-leave').onclick = function () {
    window.location.href = 'https://www.google.com';
  };
})();
