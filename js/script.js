let cancion = document.getElementById("song");
let play_btn = document.getElementById("play-btn");
let pause_btn = document.getElementById("pause");
let cover = document.getElementById("photo");
let controls = document.getElementById("controls");
let stop_btn = document.getElementById("stop");
let body1 = document.getElementById("one")

play_btn.addEventListener("click", () =>{
  cancion.play();
  cover.style.animationPlayState ="running";
  controls.style.animationPlayState ="running";
  body1.style.animationPlayState ="running";
})

pause_btn.addEventListener("click", () =>{
  cancion.pause();
  cover.style.animationPlayState ="paused";
  controls.style.animationPlayState ="paused";
  body1.style.animationPlayState ="paused";
})

stop_btn.addEventListener("click", () =>{
  cancion.load();
  cover.style.animationPlayState ="paused";
  body1.style.animationPlayState ="paused";
  controls.style.animationPlayState ="paused";
})