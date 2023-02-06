function indexOfAll(arr: number[], val: number): number[] {
  let result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
          result.push(i);
      }
  }
  return result;
}

function canJump(nums: number[]): boolean {
  const indicies: number[] = indexOfAll(nums, 0);

  if (nums.length == 1) {
    return true;
  }

  if (indicies.includes(0)) {
    return false;
  }

  return indicies.reverse().every((index) => {
    for (let i = index - 1; i >= 0; i--) {
      if (nums[i] + i >= index + 1 || nums[i] + i == nums.length - 1) {
        return true;
      }
    }
    return false;
  });
}
