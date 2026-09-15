function getMinDiff(arr, k) {
    const n = arr.length;
    arr.sort((a, b) => a - b);
    let res = arr[n - 1] - arr[0];

    // For all indices i, increment arr[0...i-1] 
    // by k and decrement arr[i...n-1] by k
    for (let i = 1; i < arr.length; i++) {
        
        // Impossible to decrement height of ith tower by k, continue
        if (arr[i] - k < 0)
            continue;
        let minH = Math.min(arr[0] + k, arr[i] - k);

        let maxH = Math.max(arr[i - 1] + k, arr[n - 1] - k);
        res = Math.min(res, maxH - minH);
    }
    return res;
}

// Driver Code
const k = 7;
const arr = [1,8, 10,6,4,6,9,1];

const ans = getMinDiff(arr, k);
console.log(ans);