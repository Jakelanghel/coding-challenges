const tst1 = "(())((()())())"; // true
const tst2 = "())("; // false
const tst3 = ")";
const tst4 = "()()"; // true
const tst5 = "(())"; // false

function validParentheses(str) {
  let inputArr = Array.from(str);
  const closeIndexArr = [];
  const openIndexArr = [];

  inputArr.forEach((char, i) => {
    if (char === "(") {
      let hasMatch = false;
      for (let j = i; j < inputArr.length; j++) {
        if (inputArr[j] === ")" && !hasMatch) {
          if (!closeIndexArr.includes(j)) {
            hasMatch = true;

            closeIndexArr.push(j);
            openIndexArr.push(i);
          }
        }
      }
    }
  });

  return inputArr.length === closeIndexArr.length + openIndexArr.length;
}

console.log(validParentheses(tst4));

// validParentheses(tst3);
// console.log(closeIndexArr);
// console.log(openIndexArr);
// console.log(inputArr);
