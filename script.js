/* ===============================
   LOGIN PROTECTION
================================ */
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
}

/* ===============================
   FLOATING HEARTS
================================ */
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
  if (!heartsContainer) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

if (heartsContainer) {
  setInterval(createHeart, 400);
}

/* ===============================
   MUSIC CONTROL (MP3)
================================ */
const musicBtn = document.getElementById("music-btn");
const bgMusic = document.getElementById("bg-music");

let isPlaying = false;

if (musicBtn && bgMusic) {
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
}

/* ===============================
   AUTO PLAY AFTER LOGIN
================================ */
window.addEventListener("load", () => {
  if (localStorage.getItem("playMusic") === "true") {
    setTimeout(() => {
      musicBtn?.click();
      localStorage.removeItem("playMusic");
    }, 500);
  }
});

/* ===============================
   LOGOUT
================================ */
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("playMusic");
  window.location.href = "login.html";
}

