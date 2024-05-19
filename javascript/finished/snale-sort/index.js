const tst_1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// should return [1,2,3,6,9,8,7,4,5]

const tst_2 = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];
// should return  [1,2,3,4,5,6,7,8,9]

const tst_3 = [
  [1, 2, 3, 1],
  [4, 5, 6, 4],
  [7, 8, 9, 7],
  [7, 8, 9, 7],
];
// should return  [1,2,3,14,7,7,9,8,7,7,4,5,6,9,8,]

snail = function (tst) {
  const res = [];

  const top = tst[0] ? tst[0] : [];

  const back = tst.slice(1, tst.length - 1).map((r) => r[r.length - 1])
    ? tst.slice(1, tst.length - 1).map((r) => r[r.length - 1])
    : [];

  const bottom = tst[tst.length - 1] > 1 ? tst[tst.length - 1] : [];

  const front = tst
    .slice(1, tst.length - 1)
    .reverse()
    .map((r) => r[0])
    ? tst
        .slice(1, tst.length - 1)
        .reverse()
        .map((r) => r[0])
    : [];

  const mid = tst.slice(1, tst.length - 1).map((r) => r.slice(1, r.length - 1))
    ? tst.slice(1, tst.length - 1).map((r) => r.slice(1, r.length - 1))
    : [];

  top.length > 0 ? res.push(tst[0]) : null;
  back.length > 0 ? res.push(back) : null;
  bottom.length > 0 ? res.push(bottom.reverse()) : null;
  front.length > 0 ? res.push(front) : null;
  mid.length > 0 ? res.push(mid) : null;
  console.log(res);

  res.flat();
  return res;
};

console.log(snail([[1]]));
