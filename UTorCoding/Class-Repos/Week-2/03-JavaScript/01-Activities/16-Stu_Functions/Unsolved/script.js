// Write Your Code Below
function isEqual(x, y) {
    if (x == y) {
        if (x === y) {
            console.log("They are equal in type and value");
        } else {
            console.log("They are equal in value");
        }
    } else {    
        console.log("The values are not equal");
    }
    return;
}

console.log(isEqual(100, 100));//numeric test case 1 should result in "they are equal in type and value
console.log(isEqual(100, -100));//numeric test case 2 should result in "the values are not equal"
console.log(isEqual("a", "a"));//string test case 1 should result in "they are equal in type and value
console.log(isEqual("a", "b"));//string test case 2 should result in "the values are not equal"
console.log(isEqual("100", 100));//value pairing case 1 "they are equal in value"
