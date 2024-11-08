function countBs(string) {
  let count = 0;

  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] === "B") {
      count++;
    }
  }

  return count;
}

console.log(countBs("A"));

function countChar(string, char) {
  let count = 0;

  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] === char) {
      count++;
    }
  }

  return count;
}

console.log(countChar("", "k"));
