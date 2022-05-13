//Ex.5 Implementation filter-find-slice-splice-some

//filter

// const filtering = (array) => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length < 5) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// };
// console.log(filtering(arr));

const filterFunction = function (sampleArray) {
  let tempArr = [];
  for (let i = 0; i < sampleArray.length; i++) {
    if (functionForFilter(sampleArray[i])) {
      tempArr += tempArr + functionForFilter(sampleArray[i]);
    }
  }
  return tempArr;
};

const functionForFilter = (array) => {
  for (let i = 0; i < sampleArray.length; i++) {
    if (item.length < 5) return result.push(array[i]);
  }
};
const arr = ["hi", "bye", "population", " satisfies"];
console.log(functionForFilter(arr));
console.log(filterFunction(arr));

// find
const array1 = [5, 12, 8, 130, 44];
const found = (array) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      arr.push(array[i]);
    }
  }
  return arr[0];
};
console.log(`find function =>`);
console.log([found(array1)]);

//slice
function slice(array, begin, end) {
  let Array = [];
  if (end === undefined || end > array.length) end = array.length;
  for (let i = begin; i < end; i++) {
    Array.push(array[i]);
  }
  return Array;
}
console.log(`slice function =>`);
console.log(slice([8, 3, 4, 5, 4], 1, 3));

// slpice
function splice(array, begin, remove, replace) {
  let arr = [];
  if (remove >= 0) {
    for (let i = 0; i < begin; i++) {
      arr.push(array[i]);
    }
  }
  let rest = slice(array, begin);
  let tempArray = arr.concat(replace);
  return tempArray.concat(rest);
}
console.log(`splice function =>`);
console.log(splice([8, 3, 4, 5, 4, 6, 7, 8], 4, 3, ["a", "b", "c"]));
