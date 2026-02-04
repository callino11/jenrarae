/* LOGIN CHECK */
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

setInterval(createHeart, 400);

/* MUSIC */
const musicBtn = document.getElementById("music-btn");
const ytMusic = document.getElementById("yt-music");
let playing = false;

musicBtn.addEventListener("click", () => {
  if (!playing) {
    ytMusic.src =
      "https://www.youtube.com/embed/KrvzDsiBgn4?autoplay=1&mute=0";
    musicBtn.textContent = "⏸ Pause Music";
  } else {
    ytMusic.src =
      "https://www.youtube.com/embed/KrvzDsiBgn4?autoplay=0&mute=1";
    musicBtn.textContent = "▶ Play Music";
  }
  playing = !playing;
});

/* LOGOUT */
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}


