var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

constellations.unshift("Canis Major");
console.log(constellations);

let removed = planets.pop();
console.log(planets);

let galaxy = [];
galaxy.push(planets);
galaxy.push(constellations);
console.log(galaxy);

let newStar = star.toUpperCase();
console.log(newStar);

/* 
console.log(typeof planets);
*/
// returns object because arrays are a special kind of object. can use Array.isArray(input) - will return true if array or false if not.