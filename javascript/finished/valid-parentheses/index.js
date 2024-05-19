const tst1 = "(())((()())())"; // true
const tst2 = "())("; // false
const tst3 = ")";
const tst4 = "()()"; // true
const tst5 = "(())"; // true

function validParentheses(str) {
  // Create array from the input string
  let inputArr = Array.from(str);
  // Create empty array to hold brackets that have matches
  const openIndexArr = [];
  // Create empty array to hold index's of closing brackets so you don't count them twice
  const closeIndexArr = [];

  // Loop over inputArr
  inputArr.forEach((char, i) => {
    // Check for opening brackets
    if (char === "(") {
      // Loop over the rest of inputArr starting at opening bracket index
      for (let j = i; j < inputArr.length; j++) {
        if (inputArr[j] === ")" && !closeIndexArr.includes(j)) {
          closeIndexArr.push(j);
          openIndexArr.push(i);
          break;
        }
      }
    }
  });
  return inputArr.length === closeIndexArr.length + openIndexArr.length;
}

console.log(validParentheses(tst2));
