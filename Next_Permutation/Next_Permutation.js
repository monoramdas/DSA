function NextPermutation(arr) {
    // code here
    let len=arr.length;
    let pivot=-1;
    console.log(len)

    // first need to find pivot index in the array
    for(let i=len-2;i>=0;i--)
    {
        console.log("index: ",i,i+1)
        console.log("value: ",arr[i],arr[i+1]);
        if(arr[i]<arr[i+1])
        {
            pivot=i;
            break;
        }
    }
    //  e.g [2, 4, 1, 7, 5, 0] pivot index 2
    console.log("pivot: ",pivot)

    // if no pivot is found then just reverse the array
    if(pivot===-1)
    {
        return arr.reverse();

    }

    // swap pivot element position to the right most element which is just getter than
    for(let i=len-1;i>=pivot;i--)
    {
        if(arr[i]>arr[pivot])
        {
            [arr[i],arr[pivot]]=[arr[pivot],arr[i]];
            break;
        }
    }
    console.log("changing position with pivot:",arr);

    // [2, 4, 5, 7, 1, 0]
    // reverse the last elements after pivot
    
    const rev=(arr,start,end)=>{
        console.log(arr,start,end)
        while(start<end){
            console.log("reverse index: ",start,end);
            [arr[start],arr[end]]=[arr[end],arr[start]];
            start++;
            end--;
        }
        console.log(arr)
    }
    
    rev(arr,pivot+1,len-1);
    // [ 2, 4, 5, 0, 1, 7 ]
    return arr;
}

// let arr=[2, 4, 1, 7, 5, 0];
// let arr= [3, 4, 2, 5, 1];
let arr=[3,2,1];

// o/p ==>[2, 4, 5, 0, 1, 7]

console.log(NextPermutation(arr));