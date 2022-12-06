const tst = "#FF9933";
// "#FF9933" --> {r: 255, g: 153, b: 51}

function hexStringToRGB(hexString) {
  const chart = { a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };

  const useChart = (x) => {
    if (isNaN(x)) {
      return parseInt(chart[x.toLowerCase()]);
    } else {
      return parseInt(x);
    }
  };

  let values = [
    hexString.slice(1, 3),
    hexString.slice(3, 5),
    hexString.slice(5),
  ];

  values = values.map((value, i) => {
    return useChart(value[0]) * 16 + useChart(value[1]);
  });

  return { r: values[0], g: values[1], b: values[2] };
}

console.log(hexStringToRGB(tst));
