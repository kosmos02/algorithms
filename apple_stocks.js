function getMaxProfit(stockPrices) {
    let maxProfit = 0
    // Calculate the max profit
    for (let i = 0; i < stockPrices.length; i++) {
        for (let j = i + 1; j < stockPrices.length; j++) {

            if (stockPrices[j] - stockPrices[i] > maxProfit) {
                
                maxProfit = stockPrices[j] - stockPrices[i]

            }
        }
    }

    return maxProfit;
}

let stocks = [1, 5, 3, 2]

console.log(getMaxProfit(stocks))