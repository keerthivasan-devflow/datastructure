function mergeSortedArrayBruteForce(nums1, nums2) {
  return nums1.concat(nums2).sort();
}

console.log(mergeSortedArrayBruteForce([1, 2, 3], [2, 6, 9], 3, 3));

function mergeSortedArrayWithExtraCopy(nums1, nums2, m, n) {
  let nums1Copy = [...nums1];
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
}

function mergeSortedArrayWithoutExtraCopy(nums1, nums2, m, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  return nums1;
}

console.log(mergeSortedArrayWithExtraCopy([1, 2, 3, 0, 0, 0], [2, 5, 6], 3, 3));
console.log(mergeSortedArrayWithoutExtraCopy([2, 7, 10], [1, 3, 9], 3, 3));
