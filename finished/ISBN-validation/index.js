const validISBN10 = (isbn) => {
  isbn = Array.from(isbn);
  let results = 0;
  const check1 = isbn.slice(0, -2).every((num) => num !== "X");
  if (!check1 || isbn.length !== 10) {
    return false;
  }
  isbn.forEach((num, i) => {
    const x = i + 1;
    if (num !== "X") {
      results += parseInt(num) * x;
    } else {
      results += 10 * x;
    }
  });

  return results % 11 === 0;
};

const test = [
  "1112223339", // true
  "111222333", // false
  "1112223339X", // false
  "1234554321", // true
  "1234512345", // false
  "048665088X", // true
  "X123456788", // false
];

test.forEach((i) => console.log(validISBN10(i)));
