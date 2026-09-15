`
Given an array prices[] of non-negative integers, representing the 
prices of the stocks on different days. 
The task is to find the maximum profit possible by buying and selling the stocks on different 
days when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell. 
If it is not possible to make a profit then return 0.

Note: Stock must be bought before being sold.

Examples:

Input: prices[] = [7, 10, 1, 3, 6, 9, 2]
Output: 8
Explanation: You can buy the stock on day 2 at price = 1 and 
sell it on day 5 at price = 9. Hence, the profit is 8.
`
function maxProfit(prices) {
    // your code here
    let minPrice=prices[0];
    let profit=0;
    
    for(let i=0;i<prices.length;i++)
    {
        minPrice=Math.min(minPrice,prices[i]);
        profit=Math.max(profit,prices[i]-minPrice)
    }
    return profit;
}
let arr=[7, 10, 1, 3, 6, 9, 2];
console.log("Result ==>",maxProfit(arr))