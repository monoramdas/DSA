function areAnagrams(s1,s2)
{
    if(s1.length!=s2.length)
    {
        return false;
    }

    let count={};
    for(let item of s1)
    {
        count[item]=(count[item]||0)+1;
    }

    for(let item of s2)
    {
        count[item]=(count[item]||0)-1;
    }
    console.log(count);
    for(let item in count)
    {
        console.log(item,count[item])
        if(count[item]!=0)
        {
            return false;
        }
    }
    return true;
}

let s1='geeks',s2='keasg';
console.log(areAnagrams(s1,s2))