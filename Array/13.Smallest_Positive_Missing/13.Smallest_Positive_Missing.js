function missingNumber(arr) {
    // code here
    arr.sort((a,b)=>a-b);
    
    let res=1;
    
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===res)
        {
            res++;
        }
        if(arr[i]>res)
        {
            break;
        }
    }
    return res;
}

const arr= [2, -3, 4, 1, 1, 7]
console.log(missingNumber(arr));