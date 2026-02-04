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

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Start floating hearts only if container exists
if (heartsContainer) {
  setInterval(createHeart, 400);
}

/* ===============================
   MUSIC CONTROL (FACEBOOK)
================================ */
const musicBtn = document.getElementById("music-btn");
const fbMusic = document.getElementById("fb-music");

let musicStarted = false;

function playFacebookMusic() {
  if (!fbMusic || musicStarted) return;

  fbMusic.src =
    "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/r/1FQETqSHF7/&show_text=false&autoplay=true&mute=0";

  musicStarted = true;

  if (musicBtn) {
    musicBtn.textContent = "🎵 Music Playing";
  }
}

if (musicBtn) {
  musicBtn.addEventListener("click", playFacebookMusic);
}

/* ===============================
   AUTO PLAY AFTER LOGIN
================================ */
window.addEventListener("load", () => {
  if (localStorage.getItem("playMusic") === "true") {
    setTimeout(() => {
      playFacebookMusic();
      localStorage.removeItem("playMusic");
    }, 800);
  }
});

/* ===============================
   ON LOAD EFFECT
================================ */
window.addEventListener("load", () => {
  if (!heartsContainer) return;

  for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 200);
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
