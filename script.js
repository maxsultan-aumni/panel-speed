let panelData;
const panel = document.querySelector("#panel");
const buttons = document.querySelectorAll("button");
let animationDelay = 100;
const animationSpeedInput = document.querySelector("#animationSpeed");

const handleButtonClick = (event) => {
  event.stopPropagation();
  if (!panelData) {
    panelData = event.target.id;
    panel.innerHTML = event.target.id;
    panel.classList.add("transition-in");
    return;
  }
  if (panelData) {
    panel.classList.remove("transition-in");
    panel.classList.add("transition-out");
    setTimeout(() => {
      panelData = event.target.id;
      panel.innerHTML = event.target.id;
      panel.classList.remove("transition-out");
      panel.classList.add("transition-in");
    }, animationDelay);
  }
};

const handlePageClick = (event) => {
  //   debugger;
  if (!panelData) return;
  if (event.target === animationSpeedInput) return;
  panelData = null;
  panel.classList.add("transition-out");
};

const handleRangeInputChange = (event) => {
  event.stopPropagation();
  var r = document.querySelector(":root");
  r.style.setProperty("--animation-time", `${event.target.value}ms`);
  animationDelay = event.target.value;
};

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

document.querySelector("#page").addEventListener("click", handlePageClick);

animationSpeedInput.addEventListener("change", handleRangeInputChange);
