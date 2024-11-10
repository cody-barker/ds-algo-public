function reverseArray(array) {
  let reversed = [];

  for (let element of array) {
    reversed.unshift(element);
  }

  return reversed;
}

console.log(reverseArray([1, 2, 3]));

function reverseArrayInPlace(array) {
  for (let i = 0; i < array.length / 2; i++) {
    // Swap elements at index i and array.length - 1 - i
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }

  return array;
}


console.log(reverseArrayInPlace([1, 2, 3]));
