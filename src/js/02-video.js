import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


player.on('timeupdate', throttle(timeValue, 1000));

function timeValue(time) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time.seconds));
    if (time.seconds === time.duration) {
        localStorage.removeItem('videoplayer-current-time');
    }
}

function onResume() {
    const currentTime = localStorage.getItem('videoplayer-current-time');
    if (currentTime) {
        player.setCurrentTime(currentTime);
    }
}
onResume();
