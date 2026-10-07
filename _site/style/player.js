(function () {
  var LIBRARY = [
    {
      group: 'SONGS',
      tracks: [
        { title: 'Black Glass - Machine Girl', url: 'https://file.garden/aBb6prPw8QkQxICV/retrograde/music/winamp/Machine%20Girl%20-%20Black%20Glass%20%5BZJRarGVsRGQ%5D.mp3' },
        { title: 'Sensoria - Cabaret Voltaire',             url: 'https://file.garden/aBb6prPw8QkQxICV/retrograde/music/winamp/Sensoria%20(12%27%27%20Version)%20(Remastered)%20%5Byxwq5bwFHYY%5D.mp3' }
      ]
    },
    {
      group: 'INSTRUMENTALS',
      tracks: [
        { title: 'Black Glass - Machine Girl', url: 'https://file.garden/aBb6prPw8QkQxICV/retrograde/music/winamp/Machine%20Girl%20-%20Black%20Glass%20%5BZJRarGVsRGQ%5D.mp3' },
        { title: 'Sensoria - Cabaret Voltaire',             url: 'https://file.garden/aBb6prPw8QkQxICV/retrograde/music/winamp/Sensoria%20(12%27%27%20Version)%20(Remastered)%20%5Byxwq5bwFHYY%5D.mp3' }
      ]
    }

  ];

  var KEY = 'retrograde-track';
  var root = document.getElementById('header-player');
  if (!root) return;

  var flat = [];
  LIBRARY.forEach(function (g) { g.tracks.forEach(function (t) { flat.push(t); }); });
  if (!flat.length) return;

  var audio = new Audio();
  audio.preload = 'none';
  var current = -1;

  var select = document.getElementById('hp-select');
  var title = root.querySelector('.hp-title');
  var playIcon = document.querySelector('#hp-play i');

  var ph = document.createElement('option');
  ph.value = '-1';
  ph.textContent = 'CHOOSE A TUNE';
  select.appendChild(ph);

  var n = 0;
  LIBRARY.forEach(function (g) {
    var og = document.createElement('optgroup');
    og.label = g.group;
    g.tracks.forEach(function (t) {
      var o = document.createElement('option');
      o.value = String(n++);
      o.textContent = t.title;
      og.appendChild(o);
    });
    select.appendChild(og);
  });

  function setTitle(text) {
    title.classList.remove('scroll');
    title.style.animationDuration = '';
    title.textContent = '';
    var span = document.createElement('span');
    span.textContent = text;
    title.appendChild(span);

    if (span.scrollWidth > title.clientWidth) {
      title.classList.add('scroll');
      span.style.animationDuration = Math.max(8, text.length * 0.3) + 's';
    }
  }

  function load(i) {
    current = (i + flat.length) % flat.length;
    audio.src = flat[current].url;
    select.value = String(current);
    setTitle(flat[current].title);
    try { localStorage.setItem(KEY, String(current)); } catch (e) {}
  }

  function play() {
    if (current < 0) load(0);
    audio.play().catch(function (err) { console.log('Audio play failed:', err); });
  }

  document.getElementById('hp-play').addEventListener('click', function () {
    if (audio.paused) play(); else audio.pause();
  });
  document.getElementById('hp-next').addEventListener('click', function () {
    load(current < 0 ? 0 : current + 1); play();
  });
  document.getElementById('hp-prev').addEventListener('click', function () {
    load(current < 0 ? 0 : current - 1); play();
  });

  select.addEventListener('change', function () {
    var i = parseInt(select.value, 10);
    if (i >= 0) { load(i); play(); }
  });

  audio.addEventListener('play',  function () { playIcon.className = 'fa-solid fa-pause'; });
  audio.addEventListener('pause', function () { playIcon.className = 'fa-solid fa-play'; });
  audio.addEventListener('ended', function () { load(current + 1); play(); });

  try {
    var saved = parseInt(localStorage.getItem(KEY), 10);
    if (!isNaN(saved) && saved >= 0 && saved < flat.length) load(saved);
  } catch (e) {}
})();
