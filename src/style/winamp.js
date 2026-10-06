(function () {
  var TRACKS = [
      {
        metaData: { artist: 'Machine Girl', title: 'Black Glass' },
        url: 'https://file.garden/aBb6prPw8QkQxICV/retrograde/music/winamp/Machine%20Girl%20-%20Black%20Glass%20%5BZJRarGVsRGQ%5D.mp3'
      },
      {
        metaData: { artist: 'Cabaret Voltaire', title: "Sensoria" },
        url: 'https://file.garden/aBb6prPw8QkQxICV/retrograde/music/winamp/Sensoria%20(12%27%27%20Version)%20(Remastered)%20%5Byxwq5bwFHYY%5D.mp3'
      },
      {
        metaData: { artist: 'FEX', title: 'Subways Of Your Mind' },
        url: 'https://file.garden/aBb6prPw8QkQxICV/retrograde/music/winamp/Subways%20Of%20Your%20Mind%20%5B9Q4qCkDwEvk%5D.mp3'
      },
      {
        metaData: { artist: 'Steve Miller Band', title: 'Fly Like An Eagle' },
        url: 'https://file.garden/aBb6prPw8QkQxICV/retrograde/music/winamp/Steve_Miller_-_Fly_Like_An_Eagle_%28mp3.pm%29.mp3'
      }
    ];

  var SKIN = 'https://file.garden/aBb6prPw8QkQxICV/retrograde/music/winamp/Future_Shock.wsz';

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
