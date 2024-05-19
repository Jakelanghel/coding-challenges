// Array.prototype.sameStructureAs = function (other) {
//   // Return 'true' if and only if 'other' has the same
//   // nesting structure as 'this'.

//   // Note: You are given a function isArray(o) that returns
//   // whether its argument is an array.
//   if (!Array.isArray(other)) return false;
//   else {
//     const nestedArrI1 = [];
//     this.forEach((num, i) => {
//       if (Array.isArray(num)) nestedArrI1.push(i);
//     });

//     const nestedArrI2 = [];
//     other.forEach((num, i) => {
//       if (Array.isArray(num)) nestedArrI2.push(i);
//     });

//     if (nestedArrI1.length !== nestedArrI2.length) return false;
//     const nestsInSameLocation = nestedArrI1.every(
//       (index, i) => index === nestedArrI2[i]
//     );

//     if (!nestsInSameLocation) return false;
//     else {
//       return nestedArrI1.every(
//         (index, i) => this[index].length === other[index].length
//       );
//     }
//   }
// };

// const arr1 = [1, 1, 1, [1, 2]];
// const arr2 = [1, 1, 1, [1, 2]];

// console.log(arr1.sameStructureAs(arr2));

Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.

  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.

  if (!Array.isArray(other)) return false;
  const otherIndex = [];

  other.forEach((num, i) => {
    if (Array.isArray(num)) {
      otherIndex.push(i);
    }
  });

  const check = (index) => {};

  return otherIndex.every((index) => Array.isArray(this[index]));
};

const arr1 = [1, 1, 1, [1, 2]];
const arr2 = [1, 1, 1, [1, 2]];

console.log(arr1.sameStructureAs(arr2));
