/*
Ex.2
Create a function that identifies D very first item that has recurred in the string
argument passed. It returns the identified item with the index where it first appeared and
the very next index where it resurfaced -- entirely as an object; or as an empty object if the
passed argument is either null, undefined, empty string, or no recurring item exists.
recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}
recurIndex("") ➞ {}
recurIndex(null) ➞ {}*/

function recurIndex(sampleString) {
  if (sampleString) {
    let tempArr = sampleString.split("");
    const charArr = tempArr.filter(
      (item, index) => index !== tempArr.indexOf(item)
    );
    console.log(tempArr);
    console.log(charArr);

    let obj = {};
    for (let j = 0; j < charArr.length; j++) {
      let result = [];
      for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] === charArr[j]) {
          result.push(i);
        }
      }

      obj[charArr[j]] = [result[0], result[1]];
    }
    return obj;
  } else {
    return {};
  }
}
let str = "AREDCBSDERD";
console.log(recurIndex(str));
