const navigationButtonsContainer = document.getElementById(
  "navigationButtonsContainer"
);
const pageName = document.getElementById("pageName");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const navigationButtons = document.getElementById("navigationButtons");
const navigationBar = document.getElementById("navigationBar");
const navigationBTNs = document.getElementsByClassName("navigationBTN");
const body = document.getElementById("body");
const X = document.getElementById("X");

navigationButtonsContainer.addEventListener("click", function () {
  pageName.style.display = "none";
  navigationButtonsContainer.style.display = "none";
  main.style.display = "none";
  footer.style.display = "none";

  X.style.display = "block";

  navigationButtons.style.width = "80vw";

  /* navigationBar.style.backgroundColor = "#7A3E65"; */

  navigationBar.style.height = "50vh";
  navigationBar.style.marginTop = "6rem";

  navigationButtons.style.display = "flex";
  navigationButtons.style.flexDirection = "column";

  for (let a of navigationBTNs) {
    a.style.fontSize = "3rem";
    a.style.margin = "2rem";
  }

  navigationButtons.style.margin = "auto";

  navigationBar.style.position = "absolute";
});

X.addEventListener("click", function () {
  pageName.style.display = "block";
  navigationButtonsContainer.style.display = "block";
  main.style.display = "grid";
  footer.style.display = "block";

  X.style.display = "none";

  navigationBar.style.marginTop = 0;
  navigationBar.style.width = "fit-content";
  navigationBar.style.height = "fit-content";
  navigationBar.style.position = "relative";
  navigationButtons.style.display = "none";
});
