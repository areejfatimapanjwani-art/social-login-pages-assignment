// This is a safe classroom demo. It never sends or stores form details.
const form = document.getElementById("demoForm");
const notice = document.getElementById("notice");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  notice.textContent = "Demo only: no login was attempted and no information was sent or saved.";
});

document.getElementById("help").addEventListener("click", function (event) {
  event.preventDefault();
  notice.textContent = "Account help is not available in this front-end demonstration.";
});

document.getElementById("signupLink").addEventListener("click", function (event) {
  event.preventDefault();
  notice.textContent = "Sign-up is not available in this front-end demonstration.";
});
