function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) /2);

        if (array[mid] === target) {
            return mid
        } else if (array[mid] < target) {
            start = mid + 1;
        } else if (array[mid] > target) {
            end = mid - 1;
        }
    }

    return -1
}

function binarySearch(array, target, start = 0, end = array.length - 1) {
    // Base case: target is not found
    if (start > end) {
        return -1;
    }

    // Calculate the midpoint
    let mid = Math.floor((start + end) / 2);

    // Base case: target found at mid
    if (array[mid] === target) {
        return mid;
    }
    // Recursive case: search left half
    else if (array[mid] > target) {
        return binarySearch(array, target, start, mid - 1);
    }
    // Recursive case: search right half
    else {
        return binarySearch(array, target, mid + 1, end);
    }
}

const array = [1,2,5,7,9,11,13,15];

console.log("Expecting 6")
console.log(binarySearch(array, 13))

console.log("Expecting -1")
console.log(binarySearch(array, 0))
