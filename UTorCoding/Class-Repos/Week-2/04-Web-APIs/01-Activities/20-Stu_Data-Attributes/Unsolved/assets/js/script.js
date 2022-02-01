let container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  let element = event.target;

  let state = element.getAttribute(data-state);
  let number = element.getAttribute(data-number);

  if (state === "hidden") {
    element.dataset.state = "visible";
    element.textContent = element.dataset.number;
  } else {
    element.dataset.state = "hidden";
    element.textContent = "";
  }
});
