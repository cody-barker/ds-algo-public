function hasPairWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === target) {
            return true; // Pair found
        } else if (sum < target) {
            left++; // Move left pointer to the right to increase sum
        } else {
            right--; // Move right pointer to the left to decrease sum
        }
    }

    return false; // No pair found
}

function hasPairWithSum(array, target) {
    let left = 0;
    let right = array.length - 1;

    while(left < right) {
        const sum = arr[left] + arr[right];

        if (sum === target) {
            return true
        } else if (sum < target) {
            left ++;
        } else right --
    }

    return false
}

// Example usage:
const arr = [1, 2, 3, 4, 6, 8, 9];
const target = 10;
console.log(hasPairWithSum(arr, target)); // Output: true, since 1 + 9 or 4 + 6 equals 10
