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

const array = [1,2,5,7,9,11,13,15];

console.log(binarySearch(array, 13))