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

// console.log(buyAndSell([7, 6, 3, 2, 1]));
// console.log(buyAndSell([7, 1, 3, 5, 6]));
console.log(buyAndSell([3, 2, 1]));
