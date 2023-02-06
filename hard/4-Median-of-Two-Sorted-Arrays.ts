function getMedian(array: number[]): number {
  array.sort((a, b) => a - b);
  const middle = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return (array[middle - 1] + array[middle]) / 2;
  }
  return array[middle];
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  return getMedian(nums1.concat(nums2));
}
