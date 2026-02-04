/* ===============================
   LOGIN CHECK (SAFE)
================================ */
window.addEventListener("load", () => {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
  }
});

/* ===============================
   MUSIC CONTROL
================================ */
const musicBtn = document.getElementById("music-btn");
const bgMusic = document.getElementById("bg-music");

let playing = false;

if (musicBtn && bgMusic) {
  musicBtn.addEventListener("click", () => {
    if (!playing) {
      bgMusic.play();
      musicBtn.textContent = "⏸ Pause Music";
    } else {
      bgMusic.pause();
      musicBtn.textContent = "▶ Play Music";
    }
    playing = !playing;
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
   LOGOUT (GLOBAL)
================================ */
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}


