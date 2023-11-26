// Ex1

// AAAAAAAA____
// ____________
// BBBBBBBBBBB_
// ____________
// CCCCCC______

// Answer: B

// Ex2

// AAAAAAAAA
// ________A__CCC_
//  B   C  A    C
// _B___C__A____C_
//  B   C       C
// _B___CCCCCCCCC_

// Answer: C

const tst1 = [
  ["A", "A", "A", "A", "A", "A", "A", "A", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
  ["B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "_"],
  ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
  ["C", "C", "C", "C", "C", "C", "_", "_", "_", "_", "_", "_"],
];

const spaghettiCode = (tst1) => {
  const results = {};
  tst1.forEach((row) => {
    row.forEach((char) => {
      if (/^[A-Z]$/.test(char)) {
      }
    });
  });
};

console.log(spaghettiCode(test1));
