// function merge(arr1, m, arr2, n) {
//     return Array.from(new Set(arr1.slice(0, m).concat(arr2.slice(0, n)).sort((a, b) => a - b)))

// }

function merge(nums1, m, nums2, n) {
    const merged = nums1.slice(0,m).concat(nums2).sort((a, b) => a - b)
    for (let i = 0; i < merged.length; i++) {
        nums1[i] = merged[i]
    }
    return nums1
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
