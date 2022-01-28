// Access element using id
var articlesDiv = document.getElementById('articles');
console.log(articlesDiv); //used this to see what getElementbyId was grabbing
var headerDiv = document.getElementById('header');
console.log(headerDiv); //used this to see what getElementbyId was grabbing

// Change style by accessing style object's properties
articlesDiv.style.fontSize = '50px';
headerDiv.children[0].style.color = 'white';
