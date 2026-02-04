function normalize(text) {
  return text.toLowerCase().replace(/,/g, "").replace(/\s+/g, " ").trim();
}

function checkAnswer() {
  const input = document.getElementById("answer").value;
  const error = document.getElementById("error");

  const acceptedAnswers = [
    "december 14 2019",
    "dec 14 2019",
    "12/14/2019",
    "12-14-2019",
    "14 december 2019"
  ];

  const isCorrect = acceptedAnswers.some(
    a => normalize(a) === normalize(input)
  );

  if (isCorrect) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("playMusic", "true");
    window.location.href = "index.html";
  } else {
    error.style.display = "block";
  }
}
