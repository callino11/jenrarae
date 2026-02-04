function normalize(text) {
  return text.trim().toLowerCase();
}

function checkAnswer() {
  const input = document.getElementById("answer").value;
  const error = document.getElementById("error");

  // 💖 CHANGE THIS TO YOUR REAL DATE
  const correctAnswer = "december 14 2019";

  if (normalize(input) === normalize(correctAnswer)) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html";
  } else {
    error.style.display = "block";
  }
}
