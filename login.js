function normalize(text) {
  return text
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function checkAnswer() {
  const input = document.getElementById("answer").value;
  const error = document.getElementById("error");

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
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html";
  } else {
    error.style.display = "block";
  }
}
