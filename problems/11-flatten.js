/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns an array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr, newArray = []) {
  if (arr.length === 0) {
    return newArray;
  }
  if (Array.isArray(arr[0])) {
    newArray = newArray.concat(flatten(arr[0]));
  } else {
    newArray.push(arr[0])
  }

  return flatten(arr.slice(1), newArray)
}

// function flatten(arr) {
//   let newArray = [];

//   function helper (arr) {
//     for (let i = 0; i < arr.length; i++) {
//       const element = arr[i];

//       if (Array.isArray(element)) {
//         helper(element);
//       } else {
//         newArray.push(element)
//       }
//     }
//   }

//   helper(arr);
//   return newArray;
// }

console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
