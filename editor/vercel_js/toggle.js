const toggleButton = document.getElementById("toggle-d-l");
const body = document.body;
const a = document.a;

toggleButton.addEventListener("click", () => {
  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "#0c0c0c";
    a.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    a.style.color = "black";
  }
});   