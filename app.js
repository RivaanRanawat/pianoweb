const WHITEKEYS = ["z", "x", "c", "v", "b", "n", "m"];
const BLACKKEYS = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

keys.forEach(key => {
  key.addEventListener("click", () => playNote(key));
});

document.addEventListener("keydown", e => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITEKEYS.indexOf(key);
  const blackKeyIndex = BLACKKEYS.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}
