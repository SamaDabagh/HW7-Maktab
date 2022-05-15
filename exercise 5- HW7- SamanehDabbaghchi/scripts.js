//Ex.5 Implementation filter-find-slice-splice-some

//filter

const filterFunction = function (sampleArray) {
  let tempArr = [];

  if (functionForFilter(sampleArray)) {
    tempArr.push(functionForFilter(sampleArray));
  }

  return tempArr;
};

const functionForFilter = (sampleArray) => {
  const result = [];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] > 3) result.push(sampleArray[i]);
  }
  return result;
};
const arr = [1, 2, 3, 5];
console.log(`filter function =>`);
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

// some
const someFunction = function (sampleArray) {
  return functionForSome(sampleArray);
};

const functionForSome = (sampleArray) => {
  const result = [];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] > 2) result.push(sampleArray[i]);
  }

  return result.length > 0 ? true : false;
};
const array = [1, 2, 3, 5];
console.log(`some function =>`);
console.log(someFunction(array));
