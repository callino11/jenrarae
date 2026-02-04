function login() {
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  // CHANGE PASSWORD HERE
  const correctPassword = "jenrarae123";

  if (password === correctPassword) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html";
  } else {
    error.style.display = "block";
  }
}
