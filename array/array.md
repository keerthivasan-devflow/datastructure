## 1.Remove duplicates from sorted array in-place

- Sorted - Non-decreasing Order
- In-Place
- Two Pointers Technique Introduction
- **Different ways of writing remove duplicates logic**
  - Brute-Force Approach - Takes O(n^2)
  - Optimal Approach - Takes O(n)
  - Less-Optimized Approach - Because it takes both time and space O(n) complexity [Using Set() in javascript]

## 4.Best Time to Buy and Sell Stocks
- **Difference between j = i + 1 and j = 1**
  
  If the inner loop is written as for (let j = 1; j < prices.length; j++), then for every iteration of the outer loop (i), the inner loop (j) always starts at 1. This means you will compare all prices[i] with every prices[j] where j is not necessarily after i. This leads to combinations where you are comparing past and future days in both directions, which is not appropriate for the buy/sell stock problem.​

  If you write for (let j = i+1; j < prices.length; j++), the inner loop always starts from the next day after i, guaranteeing that the "sell" day is always after the "buy" day. This is logically correct for stock profit calculation scenarios, where you can only sell after buying

- j = 1: inner loop always starts from index 1 for every i, so you get repeated and invalid pairs.
- j = i+1: inner loop always starts right after the current i, ensuring "buy before sell" only.
- Using j = i+1 is the correct approach for problems where the order (i before j) matters, like stock trading scenarios.
