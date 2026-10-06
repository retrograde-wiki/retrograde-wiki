(function () {
  var TRACKS = [
    { metaData: { artist: 'Artist', title: 'Song One' }, url: 'https://file.garden/YOURID/song1.mp3' },
    { metaData: { artist: 'Artist', title: 'Song Two' }, url: 'https://file.garden/YOURID/song2.mp3' }
  ];

  var SKIN = 'https://file.garden/aBb6prPw8QkQxICV/retrograde/music/winamp/3d_animo.wsz';

  var webamp = null;
  var isOpen = false;

  function load(cb) {
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/webamp@2.2.0/built/webamp.bundle.min.js';
    s.onload = cb;
    document.head.appendChild(s);
  }

  function start() {
    var box = document.createElement('div');
    box.id = 'winamp-container';
    document.body.appendChild(box);

    webamp = new Webamp({
      initialTracks: TRACKS,
      initialSkin: { url: SKIN }
    });
    webamp.onClose(function () { isOpen = false; });
    webamp.renderWhenReady(box).then(function () { isOpen = true; });
  }

  function toggle(e) {
    if (e) e.preventDefault();
    if (!webamp) { load(start); return; }
    if (isOpen) { webamp.close(); isOpen = false; }
    else { webamp.reopen(); isOpen = true; }
  }

  var btn = document.getElementById('winamp-toggle');
  if (btn) btn.addEventListener('click', toggle);
})();
