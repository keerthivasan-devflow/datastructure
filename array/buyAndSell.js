// Approach 1 - Brute-Force Solution
// Time Complexity - O(n^2)
// Space Complexity - O(1) 
function buyAndSell_bruteforce(prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j < prices.length; j++) {
      maxProfit = prices[j] - prices[i];
      if (maxProfit > max) max = maxProfit;
    }
  }
  return max;
}

// Approach 2 - Optimal Solution
// Time Complexity - O(n)
// Space Complexity - O(1)
function buyAndSell(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    let profit = prices[i] - minPrice;
    if (profit > maxProfit) maxProfit = profit;
    if (prices[i] < minPrice) minPrice = prices[i];
  }
  return maxProfit;
}

console.log(buyAndSell([7, 6, 3, 2, 1]));
console.log(buyAndSell([7, 1, 3, 5, 6]));
console.log(buyAndSell([3, 2, 1])); // Important Note - prices[i] in decreasing order then definitely there'll be no profit so return 0.
console.log(buyAndSell([2, 4, 1, 7]));
