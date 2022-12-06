const tst = "#FF9933";
// "#FF9933" --> {r: 255, g: 153, b: 51}

function hexStringToRGB(hexString) {
  const chart = { a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };

  const useChart = (x) => {
    x = x.toLowerCase();
    return chart[x];
  };

  let values = [
    hexString.slice(1, 3),
    hexString.slice(3, 5),
    hexString.slice(5),
  ];

  values = values.map((value) => {
    let x = null;
    let y = null;
    for (let i = 0; i < value.length; i++) {
      if (i === 0) {
        if (isNaN(value[i])) {
          x = useChart(value[i]) * 16;
        } else {
          x = value[i] * 16;
        }
      } else {
        if (isNaN(value[i])) {
          y = useChart(value[i]);
        } else {
          y = value[i];
        }
      }
    }
    x = parseInt(x);
    y = parseInt(y);
    return x + y;
  });
  return { r: values[0], g: values[1], b: values[2] };
}

console.log(hexStringToRGB(tst));

// if (isNaN(v)) {
//     v = v.toLowerCase();
//     console.log(chart[v]);
//     return chart.v;
//   } else {
//     return v;
//   }
