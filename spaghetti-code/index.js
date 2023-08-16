const test_1 = [
  "SSSSSASS____",
  "____________",
  "SSSSSSBSSSS_",
  "____________",
  "SSSSSC______",
];
const test_2 = [
  "SSSSSSSSS______",
  "________S__SSS_",
  " S   S  A    S ",
  "_S___S__S____S_",
  " B   S       S ",
  "_S___SSSSSCSSS_",
];

const createSpaghettiArr = (plate) => {
  const noodles = [];
  let noodle = "";

  plate.forEach((piece) => {
    for (let i = 0; i < piece.length; i++) {
      const isAlpha = /^[a-zA-Z]+$/.test(piece[i]);
      if (isAlpha) {
        noodle += piece[i];
      } else {
        if (noodle !== "") {
          noodles.push(noodle);
          noodle = "";
        }
      }
    }
  });
  return noodles;
};

const getLengthsArr = (spaghettiArr) => {
  return spaghettiArr.map((noodle) => {
    const data = { id: "S", length: noodle.length };
    for (let i = 0; i < noodle.length; i++) {
      if (noodle[i] !== "S") {
        data.id = noodle[i];
      }
    }
    return data;
  });
};

const findLargestPiece = (lengthsArr) => {
  let largest = lengthsArr[0];
  lengthsArr.forEach((noodle) => {
    largest = noodle.length >= largest.length ? noodle : largest;
  });

  return largest.id;
};

var spaghettiCode = function (plate) {
  const spaghettiArr = createSpaghettiArr(plate);
  const lengthsArr = getLengthsArr(spaghettiArr);
  return findLargestPiece(lengthsArr);
};

console.log(spaghettiCode(test_1));
