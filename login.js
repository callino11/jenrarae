function normalize(text) {
  return text
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function checkAnswer() {
  const inputEl = document.getElementById("answer");
  const error = document.getElementById("error");

  if (!inputEl || !error) return;

  const input = inputEl.value;

  // 💖 OFFICIAL DATE
  const acceptedAnswers = [
    "december 14 2019",
    "dec 14 2019",
    "12/14/2019",
    "12-14-2019",
    "14 december 2019"
  ];

  const userAnswer = normalize(input);

  const isCorrect = acceptedAnswers.some(
    answer => normalize(answer) === userAnswer
  );

  if (isCorrect) {
    // ✅ hide error
    error.style.display = "none";

    // ✅ login success
    localStorage.setItem("isLoggedIn", "true");

    // 🎶 tell index.html to auto-play music
    localStorage.setItem("playMusic", "true");

    // ✅ go to main page
    window.location.href = "index.html";
  } else {
    error.style.display = "block";
  }
}
