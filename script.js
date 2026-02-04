/* LOGIN PROTECTION */
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
}

/* FLOATING HEARTS */
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

/* YOUTUBE MUSIC CONTROL */
const musicBtn = document.getElementById("music-btn");
const ytMusic = document.getElementById("yt-music");

let musicStarted = false;

if (musicBtn && ytMusic) {
  musicBtn.addEventListener("click", () => {
    if (!musicStarted) {
      ytMusic.src = ytMusic.src.replace("autoplay=0", "autoplay=1&mute=0");
      musicBtn.textContent = "🎵 Music Playing";
      musicStarted = true;
    }
  });
}

/* AUTO PLAY AFTER LOGIN */
window.addEventListener("load", () => {
  if (localStorage.getItem("playMusic") === "true") {
    setTimeout(() => {
      musicBtn?.click();
      localStorage.removeItem("playMusic");
    }, 800);
  }
});

/* LOGOUT */
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("playMusic");
  window.location.href = "login.html";
}

