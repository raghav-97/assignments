/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}
module.exports = countVowels;


// my solution... 
// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let strArr = str.split("");
//   let vowelCount = 0;
//   for (let i = 0; i < strArr.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (strArr[i] == vowels[j]) {
//         vowelCount++;
//       }
//     }
//   }
//   return vowelCount;
