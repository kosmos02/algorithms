// First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

// So I grabbed Apple's stock prices from yesterday and put them in a list called stock_prices, where:

// The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
// The values are the price (in US dollars) of one share of Apple stock at that time.
// So if the stock cost $500 at 10:30am, that means stock_prices[60] = 500.

// Write an efficient function that takes stock_prices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.


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