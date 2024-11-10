function arrayToList(array) {
  let list = null;

  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }

  return list;
}

console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
  let array = [];
  let currentNode = list;

  while (currentNode) {
    array.push(currentNode.value);
    currentNode = currentNode.rest;
  }

  return array;
}

const list = arrayToList([1, 2, 3]);
console.log(list);
console.log(listToArray(list)); // [1, 2, 3]
