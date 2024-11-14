function min(a, b) {
  if (a === b) {
    return a;
  }

  return a < b ? a : b;
}

console.log(min(2, 10));
