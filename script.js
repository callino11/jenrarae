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

// start floating hearts
setInterval(createHeart, 400);

/* ===============================
   MUSIC CONTROL (FACEBOOK)
================================ */
const musicBtn = document.getElementById("music-btn");
const fbMusic = document.getElementById("fb-music");

let musicStarted = false;

if (musicBtn && fbMusic) {
  musicBtn.addEventListener("click", () => {
    if (!musicStarted) {
      // reload iframe with autoplay + unmute
      fbMusic.src =
        "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/r/1FQETqSHF7/&show_text=false&autoplay=true&mute=0";

      musicBtn.textContent = "🎵 Music Playing";
      musicStarted = true;
    }
  });
}


/* ===============================
   AUTO PLAY AFTER LOGIN (OPTIONAL)
================================ */
if (localStorage.getItem("playMusic") === "true") {
  window.addEventListener("load", () => {
    setTimeout(() => {
      musicBtn?.click();
      localStorage.removeItem("playMusic");
    }, 800);
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
  localStorage.removeItem("playMusic");
  window.location.href = "login.html";
}
