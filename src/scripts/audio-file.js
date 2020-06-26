

export const play_pause = () => {
  let musicPlayer = document.getElementById("myTune");

  let icon = document.getElementById('playPause')

  icon.addEventListener('click', () => {
  if (!!musicPlayer.paused) {
      icon.classList.remove('fa-play');
      icon.classList.add('fa-pause');
      musicPlayer.play();
    } else {
      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play');
      musicPlayer.pause();
    }
  });

}

// export const play_pause = () => {
//   var myAudio = document.getElementById("myTune");

//   let icon = document.getElementById('playPause')
//   if (!myAudio.isPlaying) {
//     icon.addEventListener('click', () => {
//       // debugger
//       icon.classList.remove('fa-play');
//       icon.classList.add('fa-pause');
//       myAudio.play();
//     });
//   } else {
//     icon.addEventListener('click', () => {
//       icon.classList.remove('fa-pause');
//       icon.classList.add('fa-play');
//       myAudio.pause();
//     });
//   }
// }