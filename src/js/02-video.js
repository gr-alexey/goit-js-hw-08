import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe'); 
const player = new Player(iframe);


player.on('timeupdate',throttle(timeTracking,1000));

function timeTracking (evt) {
let currentTime = evt.seconds;
localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));
    
}

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));