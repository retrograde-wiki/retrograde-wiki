(function() {
    'use strict';

    function initMusicPlayer() {
        const musicPlayer = document.getElementById('musicPlayer');
        const musicAudio = document.getElementById('musicAudio');

        if (!musicPlayer || !musicAudio) {
            return;
        }

        let isPlaying = false;

        musicPlayer.addEventListener('click', function() {
            if (musicAudio.ended) {
                musicAudio.currentTime = 0;
                musicAudio.play().then(() => {
                    musicPlayer.classList.add('playing');
                    isPlaying = true;
                }).catch(error => {
                    console.log('Audio play failed:', error);
                });
            } else if (isPlaying) {
                musicAudio.pause();
                musicPlayer.classList.remove('playing');
                isPlaying = false;
            } else {
                musicAudio.play().then(() => {
                    musicPlayer.classList.add('playing');
                    isPlaying = true;
                }).catch(error => {
                    console.log('Audio play failed:', error);
                });
            }
        });

        musicAudio.addEventListener('ended', function() {
            musicPlayer.classList.remove('playing');
            isPlaying = false;
        });

        musicAudio.addEventListener('error', function() {
            console.log('Audio failed to load');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMusicPlayer);
    } else {
        initMusicPlayer();
    }
})();
