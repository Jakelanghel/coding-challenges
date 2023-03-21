const tst1 = [5, 1, 3, 4, 1];
const tst2 = [1, 1, 1, 3, 1];
const tst3 = [2, 4, 4, 5, 4];

const score = (tst) => {
  let score = 0;
  let scoreCard = {};

  tst.forEach((num) => {
    scoreCard.hasOwnProperty(`${num}`)
      ? (scoreCard[num] += 1)
      : (scoreCard[num] = 1);
  });

  for (let key in scoreCard) {
    if (scoreCard[key] >= 3) {
      scoreCard[key] -= 3;
      key = key === "1" ? 10 : key;
      score += parseInt(key) * 100;
    }
  }
  const fives = scoreCard["5"] ? scoreCard["5"] * 50 : 0;
  const ones = scoreCard["1"] ? scoreCard["1"] * 100 : 0;

  return (score += fives + ones);
};

console.log(score(tst2));
