const cycleSort= require("./cycle-sort/cycle-sort");
const arr=[5];
const sortResult=cycleSort(arr);
console.log({sortResult});
console.log([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14].sort())

var reverse = function (x) {

    let res = 0;
    while (x !== 0) {
        let rem = x % 10;
        res = (res * 10) + rem;
        x = x / 10;
        console.log(x);
        
    }
    return res
};

console.log(reverse(123))