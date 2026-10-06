(function () {
  var HOVER_URL = 'https://file.garden/aBb6prPw8QkQxICV/retrograde/sfx/SCPH-10000_00028.wav';
  var CLICK_URL = 'https://file.garden/aBb6prPw8QkQxICV/retrograde/sfx/SCPH-10000_00023.wav'; // swap for your click sound
  var HOVER_VOLUME = 0.1;
  var CLICK_VOLUME = 0.1;
  var NAV_DELAY = 500;
  // ^^^ 1000 is one second)
  var SELECTOR = 'header a, .header-links a, nav a, .menu a';

  var hoverSound = new Audio(HOVER_URL);
  var clickSound = new Audio(CLICK_URL);
  hoverSound.preload = 'auto';
  clickSound.preload = 'auto';

  function play(base, volume) {
    var s = base.cloneNode();
    s.volume = volume;
    s.play().catch(function (err) { console.log('Audio play failed:', err); });
  }

  function playHoverSound() {
    play(hoverSound, HOVER_VOLUME);
  }

  function addHoverSounds() {
    document.querySelectorAll(SELECTOR).forEach(function (link) {
      link.removeEventListener('mouseenter', playHoverSound);
      link.addEventListener('mouseenter', playHoverSound);
    });
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest(SELECTOR);
    if (!link) return;

    play(clickSound, CLICK_VOLUME);

    var href = link.getAttribute('href');
    var opensElsewhere =
      e.defaultPrevented ||
      e.button !== 0 ||
      e.ctrlKey || e.metaKey || e.shiftKey || e.altKey ||
      link.target === '_blank' ||
      !href || href.charAt(0) === '#';

    if (opensElsewhere) return;
    e.preventDefault();
    setTimeout(function () {
      window.location.href = link.href;
    }, NAV_DELAY);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addHoverSounds);
  } else {
    addHoverSounds();
  }

  window.initHoverSounds = addHoverSounds;
})();
EOF
