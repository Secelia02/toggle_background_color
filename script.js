let toggleButton = document.getElementById("toggleButton");
let isRed = true;

toggleButton.addEventListener("click", function() {
  if (isRed){
    document.body.style.backgroundColor = "blue";
  } else {
    document.body.style.backgroundColor = "red";
  }

  isRed = !isRed;
})

