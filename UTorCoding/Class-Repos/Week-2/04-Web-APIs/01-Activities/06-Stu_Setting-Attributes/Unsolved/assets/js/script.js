var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");

site1El.children[0].textContent = "Site 1";//this is h4
site1El.children[1].setAttribute("href", "https://google.com");
site1El.children[1].children[0].setAttribute("src", "assets/images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt", "man working");
site1El.children[1].children[0].setAttribute("style", "padding:10px;");

site2El.children[0].textContent = "Site 2";//this is h4
site2El.children[1].setAttribute("href", "https://twitter.com");
site2El.children[1].children[0].setAttribute("src", "assets/images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "group brainstorm");
site2El.children[1].children[0].setAttribute("style", "padding:10px;");

site3El.children[0].textContent = "Site 3";//this is h4
site3El.children[1].setAttribute("href", "https://instagram.com");
site3El.children[1].children[0].setAttribute("src", "assets/images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "women working");
site3El.children[1].children[0].setAttribute("style", "padding:10px;");

// Write Your Code Below

let h4Tags = document.querySelectorAll("h4");
//console.log(h4Tags);

for (let i = 0; i < h4Tags.length; i++) {
    h4Tags[i].setAttribute("style", "color: blue; font-weight: bold; font-size: 30px; padding-left: 10px; margin: 0px;");
}
