const max = (a, b) => {
  const combained = [...a, ...b];
  let maxs = Math.max(...combained);
  return maxs;
};

const d = [1, 200, 4, 5, 6, 10];

const e = [13, 4, 5, 2, 1, 44];

const res = max(d, e);
console.log(res);
