const audio = document.getElementById("audio");
const progressBar = document.getElementById("progressBar");
const playPauseBtn = document.getElementById("playPauseBtn");
const playIcon = "play.svg";
const pauseIcon = "pause.svg";


audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
});


progressBar.addEventListener("input", () => {
  const newTime = (progressBar.value * audio.duration) / 100;
  audio.currentTime = newTime;
});


function togglePlay() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.querySelector("img").src = pauseIcon;
  } else {
    audio.pause();
    playPauseBtn.querySelector("img").src = playIcon;
  }
}


function rewindSong() {
  audio.currentTime = Math.max(0, audio.currentTime - 10);
}


function forwardSong() {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
}
