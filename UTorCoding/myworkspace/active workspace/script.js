function getAvg(arr) {

  let sum = 0;
  let average = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  average = sum / arr.length;
  return average;
}

let arr1 = [ 1 , 4 , 7 ];
let arr2 = [ 10, 5 ];
let arr3 = [ 1.5, 3, 2.5, 1 ];

console.log(getAvg(arr1));
console.log(getAvg(arr2));
console.log(getAvg(arr3));