const list = arrayToList([1, 2, 3]);
console.log(nthRecursive(list, 2));

function arrayToList(array) {
  let list = null;

  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }

  return list;
}

function listToArray(list) {
  let array = [];
  let currentNode = list;

  while (currentNode) {
    array.push(currentNode.value);
    currentNode = currentNode.rest;
  }

  return array;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

function nth(list, number) {
  while (list && number > 0) {
    list = list.rest;
    number--;
  }

  return list;
}

function nthRecursive(list, element) {
  if (!list) {
    return undefined;
  }

  if (element === list.value) {
    return list;
  }

  return nthRecursive(list.rest, element);
}

function deepEqual(a, b) {
  if (a === b) return true;

  if (
    a === null ||
    b === null ||
    typeof a !== "object" ||
    typeof b !== "object"
  ) {
    return false;
  }

  let aprops = Object.keys(a);
  let bprops = Object.keys(b);

  if (aprops.length !== bprops.length) return false;

  for (let prop of aprops) {
    if (!bprops.includes(prop) || !deepEqual(a[prop], b[prop])) {
      return false;
    }
  }

  return true;
}
