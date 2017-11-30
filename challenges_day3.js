// Challenges Day 3 (11/29/2017)
// By Jordan Dominguez & Oscar Trejo

// Array of Numbers
let numArray = [23, 6, 11, 133, 90];
let max = 0;


numArray.forEach(function(element) {
  if (element > max) {
    max = element;
  }
});

console.log(Math.max.apply(null, numArray));

// Array of Strings

let siblings = ["Austin", "Omar", "Gabe"];
let parents = ["Cary", "Joe", "Reynaldo", "Matilde"];

let siblingsSort = siblings.sort();

let parentsSort = parents.reverse(parents.sort());

let allNames = (siblings.concat(parents)).sort();

let reverseNames = allNames.reverse();

function checkName(name) {
  if (allNames.lastIndexOf(name) !== -1) {
    return "Name Found.";
  } else {
    return "Not found.";
  }
};


// Return even elements of array (w/ for loop)
let arrayNum = [4, 9, 12, 10, 16];
let array = [];

function evenElements(a) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
    array.push(a[i]);
    }
  }
  return array;
};

// Return even elements of array (w/ forEach)
let arrayNum = [4, 9, 12, 10, 16];
let array = [];

arrayNum.forEach(function(element) {
  if (element % 2 === 0) {
    array.push(element);
  }
});


// Return odd elements of array (w/ forEach)
arrayNum.forEach(function(element) {
  if (element % 2 !== 0) {
    array.push(element);
  }
});


// Closest to zero
let arrayNum = [4, 9, 12, 10, 16, -2, -5, -.05, -.02];

let closestZero = Infinity;

arrayNum.forEach(function(element){
  if (Math.abs(element) - Math.abs(closestZero) < 0) {
    return closestZero = element;
  }
});

// For to While
// for (var i = 0; i<10; i++) { console.log(i); }

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// // While to for ;
// var a = 10;
// while (a > 0) {
//   console.log(a);
//   a = a - 1;
// }

for (var a = 10; a > 0; a -= 1) {
  console.log(a);
}

// Duplicate ARRAY
let array1 = [1,2,3];
let array2 = [2,30,1];

function mergeArray(array1, array2) {
  var newArray = array1.concat(array2);
  var unique = newArray.filter(function(element,index,self) {
    return index === self.indexOf(element);
  })
  return unique;
}

mergeArray(array1, array2);

// Pre-fill
let array  = []; // Create empty array

function fillArray (amt, value) { // create function that takes two values
  for (let i = amt; i > 0; i--) { // set counter to amount, and add decrement
    array.push(value); // add amount of values to empty array
  }
};

fillArray(9, 5);

console.log(array);


// Clean function
