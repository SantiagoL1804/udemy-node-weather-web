const app = document.getElementById("app");
const pointer = document.getElementById("pointer");

window.onload = () => {
  app.addEventListener("mouseenter", () => {
    pointer.style.display = "none";
  });
};
