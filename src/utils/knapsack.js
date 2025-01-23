export function knapsack(items, capacity) {
    const n = items.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
  
    for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= capacity; w++) {
        if (items[i - 1].weight <= w) {
          dp[i][w] = Math.max(
            items[i - 1].utility + dp[i - 1][w - items[i - 1].weight],
            dp[i - 1][w]
          );
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
  
    const selectedSupplies = [];
    let i = n, w = capacity;
    while (i > 0 && w > 0) {
      if (dp[i][w] !== dp[i - 1][w]) {
        selectedSupplies.push(items[i - 1]);
        w -= items[i - 1].weight;
      }
      i--;
    }
  
    return {
      totalUtility: dp[n][capacity],
      selectedSupplies: selectedSupplies.reverse()
    };
  }
  
  