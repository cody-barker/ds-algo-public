function merge(arr1, m, arr2, n) {
    return Array.from(new Set(arr1.slice(0, m).concat(arr2.slice(0, n)).sort((a, b) => a - b)))

}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
