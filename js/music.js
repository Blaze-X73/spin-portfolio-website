// List of royalty-free MP3 files
const tracks = [
  "audio/flamenco.mp3",
  "audio/itaguit.mp3",
  "audio/wildwest.mp3",
];

let currentTrack = 0;
const audio = document.querySelector("#bg-audio");
const toggleBtn = document.querySelector("#music-toggle");
const toggleBtnArrow = document.querySelector(".play-button")

//Load 1st track and set default volume
audio.src = tracks[currentTrack];
audio.volume = 0.5;

//Toggle music

toggleBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    toggleBtn.classList.toggle("active");
  } else {
    audio.pause();
    toggleBtn.classList.toggle("active");
  }
  toggleBtnArrow.classList.toggle("playing");
});

// Automatically play the next song when one finishes
audio.addEventListener("ended", () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  audio.src = tracks[currentTrack];
  audio.play();
});
