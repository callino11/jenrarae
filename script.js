/*************************
 LOGIN PROTECTION
*************************/
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
}

/*************************
 FLOATING HEARTS
*************************/
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

/*************************
 MUSIC CONTROL
*************************/
const musicBtn = document.getElementById("music-btn");
const ytMusic = document.getElementById("yt-music");

let musicPlaying = false;

function playMusic() {
  ytMusic.src =
    "https://www.youtube.com/embed/KrvzDsiBgn4?enablejsapi=1&autoplay=1&mute=0";
  musicBtn.textContent = "⏸ Pause Music";
  musicPlaying = true;
}

function pauseMusic() {
  ytMusic.src =
    "https://www.youtube.com/embed/KrvzDsiBgn4?enablejsapi=1&autoplay=0&mute=1";
  musicBtn.textContent = "▶ Play Music";
  musicPlaying = false;
}

musicBtn.addEventListener("click", () => {
  musicPlaying ? pauseMusic() : playMusic();
});

/*************************
 AUTO PLAY AFTER LOGIN
*************************/
window.addEventListener("load", () => {
  if (localStorage.getItem("playMusic") === "true") {
    setTimeout(playMusic, 800);
    localStorage.removeItem("playMusic");
  }
});

/*************************
 LOGOUT
*************************/
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}
