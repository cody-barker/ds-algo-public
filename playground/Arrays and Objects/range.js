function range(start, end) {
  let range = [];

  while (start <= end) {
    range.push(start);
    start++;
  }

  return range;
}

console.log(range(1, 10));

function sum(range) {
  let sum = 0;

  for (num of range) {
    sum += num;
  }

  return sum;
}

let numRange = [1, 10];

console.log(sum(range(numRange)));
