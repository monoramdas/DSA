`Given an array arr[] consisting of n integers, find all the 
array elements which occurs more 
than floor(n/3) times. Return the resulting array in strictly increasing order. 
If no such elements exist, return an empty array.`;

`Input: arr[] = [2, 2, 3, 1, 3, 2, 1, 1]
Output: [1, 2]
Explanation: The frequency of 1 and 2 is 3, which is more than floor n/3 (8/3 = 2).
`


function findMajority(arr) {
  // code here
  let res = {};
  let finalArray=[];
  let len = arr.length;
  let target = len / 3;
  for (let i = 0; i < len; i++) {
    res[arr[i]] = (res[arr[i]] || 0) + 1;
  }

  for(let item in res)
  {
    if(res[item]>target)
    {
      finalArray.push(Number(item));
    }
  }
  return finalArray;
}

let arr = [2, 2, 3, 1, 3, 2, 1, 1];
console.log("Result====>",findMajority(arr));
