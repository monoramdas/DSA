function rotateArr(arr, d) {
  // code here
  let len = arr.length;
  // if d's value is greter than array length
  let step = d % len;
  console.info("Rotated",step)
  function rev(arr, start, end) {
    console.log(arr, start, end)
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  rev(arr, 0, step-1);
  rev(arr, step, len-1);
  rev(arr, 0, len-1);
  return arr;
}

// Input: arr[] = [1, 2, 3, 4, 5], d = 2
// Output: [3, 4, 5, 1, 2]

// Input: arr[] = [7, 3, 9, 1], d = 9
// Output: [3, 9, 1, 7]

let arr=[1,2,3,4,5],d=2;
console.log(rotateArr(arr,d))
