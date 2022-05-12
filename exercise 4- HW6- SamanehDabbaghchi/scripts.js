/*Ex.4 Create a function that takes an array of strings and returns 
an array with only the strings that have numbers in them. If there are
no strings containing numbers, return an empty array.
*/
const filterString = (sampleArray) => {
  let newArray = [];
  sampleArray.map((item) => {
    if (/[0-9]/.test(item)) {
      return newArray.push(item);
    } else {
      return [];
    }
  });
  return newArray;
};
console.log(filterString(["Sad", "b", "1", "h3h2a2", "sa8779"]));
