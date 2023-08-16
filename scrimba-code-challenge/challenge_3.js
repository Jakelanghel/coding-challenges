/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'm So HaPpY iT's MoNdAy"
*/

const altCaps1 = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i] + " index " + i);
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

const altCaps2 = (inputString) => {
  var result = "";
  var capitalizeNext = true;

  for (var i = 0; i < inputString.length; i++) {
    var char = inputString[i];

    if (/[a-zA-Z]/.test(char)) {
      if (capitalizeNext) {
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }

      capitalizeNext = !capitalizeNext;
    } else {
      result += char; // Keep punctuation unchanged
    }
  }
  console.log(result);
  return result;
};

altCaps2("I'm so happy it's Monday");
