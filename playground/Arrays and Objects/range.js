function range(start, end, step = 1) {
  let range = [];

  if (step === 0) {
    throw new Error("Step cannot be zero.");
  }

  if ((step > 0 && start > end) || (step < 0 && start < end)) {
    return range; // return an empty array if the range cannot be reached with the given step
  }

  while ((step > 0 && start <= end) || (step < 0 && start >= end)) {
    range.push(start);
    start += step;
  }

  return range;
}

console.log(range(2, 5, 3));

function sum(range) {
  let sum = 0;

  for (let num of range) {
    sum += num;
  }

  return sum;
}

let numRange = [10, 1];

console.log(sum(range(...numRange, -1)));
