// TODO: Which element is the following line of code selecting?
// assigns a new variable called carousel to the first element within the class "carouselbox"
var carousel = document.querySelector(".carouselbox");

// TODO: Which element is the following line of code selecting?
// the variable "next" is selecting the  "next" button;
//the variable "prev" is selecting the "prev" button;
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// this event opens the image url in the same window and removes all other functionality
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
//this event is adding click navigation to the next button
next.addEventListener("click", function(event) {
  //console.log(event)
  // TODO: What is the purpose of the following line of code?
  // this stops the button click event from propagating within the carousel image click event
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// same function as next button
prev.addEventListener("click", function(event) {
  //console.log(event)
    // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
