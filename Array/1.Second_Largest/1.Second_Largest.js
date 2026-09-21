`Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

Note: The second largest element should not be equal to the largest element.

Examples:

Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.`

function getSecondLargest(arr) {
    // code here
    let max=arr[0];
    let secMax=-1;
    
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max)
        {
            secMax=max;
            max=arr[i];
        }
        else if(arr[i]<max && secMax<arr[i]){
            secMax=arr[i];
        }
    }
    return secMax;
}