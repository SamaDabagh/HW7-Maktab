/*Ex.4 Create a function that takes an array of strings and returns 
an array with only the strings that have numbers in them. If there are
no strings containing numbers, return an empty array.
*/
const filterStrings = (sampleArray) => {
  let newArray = [];
  let map1 = sampleArray.map((item) => {
    if (/[0-9]/.test(item)) {
      return newArray.push(item);
    } else {
      return [];
    }
  });
  return newArray;
};
console.log(filterStrings(["S", "b", "1hhi00", "gg453", "aDA"]));
