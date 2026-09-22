`
You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`;

function TwoSum(nums, target) {
  let test = nums.map((item, index) => ({ item, index }));
  test.sort((a, b) => a.item - b.item);
  let l = 0;
  let r = test.length - 1;
  while (l < r) {
    if (test[r].item + test[l].item === target) {
      return [test[r].index, test[l].index];
    } else if (test[r].item + test[l].item > target) {
      r--;
    } else {
      l++;
    }
  }
}
