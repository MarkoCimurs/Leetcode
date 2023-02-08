function singleNonDuplicate(nums: number[]): number {
  let first: boolean = true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] != nums[i]) {
      first = true;
    } else first = false;

    if (first && nums[i + 1] != nums[i]) {
      return nums[i];
    }
  }

  return -1;
}
