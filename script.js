// Floating Hearts
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 400);

// Music Control
const musicBtn = document.getElementById("music-btn");
const bgMusic = document.getElementById("bg-music");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play();
    musicBtn.textContent = "⏸ Pause Music";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "▶ Play Music";
  }
  isPlaying = !isPlaying;
});

// Sparkle Effect on Load
window.onload = () => {
  for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 200);
  }
};
