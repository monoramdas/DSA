function cycleSort(arr)
{
    let len=arr.length;
    let i=0;
    while(i<len)
    {
        let correct=arr[i]-1;
        if(arr[i]!==arr[correct])
        {
            [arr[i],arr[correct]]=[arr[correct],arr[i]];   
        }else{
            i++;
        }
    }
    i=0;
    let missing;
    while(i<len)
    {
        if(arr[i]===undefined)
        {
            missing=i+1;
            break;
        }
        i++;
    }
    return missing;
}

module.exports=cycleSort