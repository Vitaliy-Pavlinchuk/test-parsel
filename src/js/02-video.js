
// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const KEY = 'videoplayer-current-time';

// const player = new Player('vimeo-player');
// const key = localStorage.getItem(KEY);
// if (key) {
//   player.setCurrentTime(parseFloat(key));
// }

// player.on(
//   'timeupdate',
//   throttle(data => {
//     localStorage.setItem(KEY, data.seconds.toString());
//   }, 1000),
// );


// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// const LOCALSTORAGE_KEY = 'videoplayer-current-time';

// player.on('timeupdate',
//   throttle(function (timeupdate) {
//     localStorage.setItem(LOCALSTORAGE_KEY, timeupdate.seconds);
//   }, 1000),
// );

// player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));