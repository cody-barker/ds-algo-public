function hasPairWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return true;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}     

console.log(hasPairWithSum([1, 2, 3, 4, 6, 8, 9], 10)); // Output: true, since 1 + 9 or 4 + 6 equals 10   
