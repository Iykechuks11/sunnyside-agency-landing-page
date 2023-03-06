const open = document.getElementById("open"),
  hamburger = document.getElementById("ham-body");

open.addEventListener("click", () => {
  if (hamburger.classList.contains("open")) {
    hamburger.classList.remove("open");
  } else {
    hamburger.classList.add("open");
  }
});
