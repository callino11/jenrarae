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

/* ===============================
   MUSIC CONTROL
================================ */
const musicBtn = document.getElementById("music-btn");
const ytMusic = document.getElementById("yt-music");

let musicStarted = false;

if (musicBtn && ytMusic) {
  musicBtn.addEventListener("click", () => {
    if (!musicStarted) {
      // unmute & start playback
      ytMusic.src = ytMusic.src.replace("&mute=1", "&mute=0&autoplay=1");
      musicBtn.textContent = "🎵 Music Playing";
      musicStarted = true;
    }
  });
}
/* ===============================
   ON LOAD EFFECT
================================ */
window.addEventListener("load", () => {
  for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 200);
  }
});

/* ===============================
   LOGOUT
================================ */
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}
