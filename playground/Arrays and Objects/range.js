function range(start, end) {
  let range = [];

  while (start <= end) {
    range.push(start);
    start++;
  }

  return range;
}

console.log(range(1, 10));
