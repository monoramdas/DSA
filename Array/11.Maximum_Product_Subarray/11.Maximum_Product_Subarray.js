`Given an array arr[] that contains positive and negative integers 
(may contain 0 as well). Find the maximum product that we can get in a subarray of arr[].

Note: It is guaranteed that the answer fits in a 32-bit integer.

Examples

Input: arr[] = [-2, 6, -3, -10, 0, 2]
Output: 180
Explanation: The subarray with maximum product is [6, -3, -10] with product = 6 * (-3) * (-10) = 180.
`

function maxProduct(arr) {
    // code here
    let max=arr[0];
    let min=arr[0];
    let res=arr[0];
    
    for(let i=1;i<arr.length;i++)
    {
        let temp=Math.max(arr[i],arr[i]*max,arr[i]*min);
        min=Math.min(arr[i],arr[i]*max,arr[i]*min);
        max=temp;
        res=Math.max(max,res);
    }
    return res;
    
}
let arr= [-2, 6, -3, -10, 0, 2];
console.log("result ==> ", maxProduct(arr));