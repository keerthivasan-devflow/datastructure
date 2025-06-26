function buyAndSell(prices) {
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) maxProfit = prices[i] - min;
    if (prices[i] < min) min = prices[i];
  }
  return maxProfit;
}

console.log(buyAndSell([7, 6, 3, 2, 1]));
console.log(buyAndSell([7, 1, 3, 5, 6]));
console.log(buyAndSell([3, 2, 1]));
console.log(buyAndSell([2, 4, 1, 7]));
