function showMessage() {
  alert("Welcome to the sample static website!");
}

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
