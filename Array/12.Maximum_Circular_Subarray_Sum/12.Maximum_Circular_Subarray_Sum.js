function maxCircularSum(arr) {
  // code here
  let len = arr.length;

  let max = arr[0];
  let maxSum = arr[0];

  let min = arr[0];
  let minSum = arr[0];

  let total = arr[0];

  for (let i = 1; i < len; i++) {
    max = Math.max(arr[i], arr[i] + max);
    maxSum = Math.max(max, maxSum);

    total += arr[i];

    min = Math.min(arr[i], min + arr[i]);
    minSum = Math.min(min, minSum);
  }

  let circularSum = total - minSum;
  // [-1,-2,3]
  if (minSum === total) {
    return maxSum;
  }

  return Math.max(maxSum, circularSum);
}

let arr=[8, -8, 9, -9, 10, -11, 12];
console.log(maxCircularSum(arr));