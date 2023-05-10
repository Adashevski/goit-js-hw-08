const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const currentTime = localStorage.getItem('videoplayer-current-time');
console.log('Current time: ' + currentTime + ' seconds');

const player = new Vimeo.Player(iframe);
player.setCurrentTime(currentTime);
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on(
  'timeupdate',
  throttle(function (data) {
    const time = data.seconds;
    localStorage.setItem('videoplayer-current-time', time);
    console.log('Current time: ' + data.seconds + ' seconds');
  }, 1000)
);

player.on('play', function () {
  console.log('played the video!');
});
player.on('pause', function (data) {
  console.log('Video paused at ' + data.seconds + ' seconds');
});
