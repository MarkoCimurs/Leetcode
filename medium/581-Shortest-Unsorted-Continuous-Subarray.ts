function findUnsortedSubarray(nums: number[]): number {
  let sorted = [...nums].sort((a, b) => a - b);

  let start: number | null = null;
  let end: number | null = null;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== sorted[i] && start == null) {
      start = i;
    }

    if (nums[i] !== sorted[i] && start != null) {
      end = i;
    }
  }

  return end == null || start == null ? 0 : end - start + 1;
}
