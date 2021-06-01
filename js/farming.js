// Global variables
alert("Thank you for visiting today!");

let current_price_ethereum = 0;
let current_price_swise = 0;
let current_price_1inch = 0;
let swap_ethereum_swise = 0;
let swap_ethereum_1inch = 0;
let amount_swise_invest = 0;
let amount_1inch_purchase = 0;
let estimated_apy = 0;
let days_left_to_farm = 0;
let total_value_swise = 0;
let total_cost_1inch = 0;
let farming_start_date = new Date();
let farming_end_date = new Date();
let swise_rewards_earned = 0;
let fiat_swise_rewards_earned = 0;
let 1inch_rewards_earned = 0;
let final_profit = 0;
let swise_1inch_ratio = 0;
// HTML values
// currprice_ethereum
// currprice_swise
// currprice_1inch
// startdate
// enddate
// amount_swise
// purchase_1inch
// apy
// final_profit
// swiseaward
// swiseawardfiat
// daysleft
// value_swise
// cost_1inch

// create function to parse json from a URL and store data
	var getJSON = function(url, callback) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.responseType = 'json';
			xhr.onload = function() {
				var status = xhr.status;
				if (status === 200) {
				callback(null, xhr.response);
				} else {
				callback(status, xhr.response);
				}
			};
			xhr.send();
	};

	// Get Stakewise data
	getJSON('https://api.coingecko.com/api/v3/coins/stakewise?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true',
	function(err, data) {
		if (err !== null) {
				alert('Something went wrong: ' + err);
		} else {
				current_price_swise = data.market_data.current_price.usd;
			currprice_swise.innerHTML = current_price_swise;
		}
	});

	// Get 1 inch data
	getJSON('https://api.coingecko.com/api/v3/coins/1inch?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true',
	function(err, data) {
		if (err !== null) {
				alert('Something went wrong: ' + err);
		} else {
				current_price_1inch = data.market_data.current_price.usd;
			currprice_1inch.innerHTML = current_price_1inch;
		}
	});

	// Get Ethereum data
	getJSON('https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true',
	function(err, data) {
		if (err !== null) {
				alert('Something went wrong: ' + err);
		} else {
				current_price_ethereum = data.market_data.current_price.usd;
			currprice_ethereum.innerHTML = current_price_ethereum;
		}
	});

	// Set startdate and enddate on page load
	window.onload = function() {
				startdate.innerHTML = new Date();
		enddate.innerHTML = new Date();
	};

	// Show Connect wallet coming soon alert
	function comingSoon() {
				alert("This feature is coming soon");
	}

	function showCalculation() {
				//set days left to farm
				days_left_to_farm = days.value;

		// Set apy %
		apy_percent = apy.value;
		
		// Set eth 1inch swap price
		eth_to_oneinch_price = swap_1inch.value;
		
		// Set eth to swise swap price
		eth_to_swise_price = swap_swise.value;
		
		// Set swise amount investing
		swise_amount = amount_swise.value;
		
		// Calculate ratio
		swise_1inch_ratio = current_price_1inch / current_price_swise;
	
		// Determine how much 1inch to purchase
		amount_1inch_purchase = amount_swise.value / swise_1inch_ratio;
	
		// Update display
		purchase_1inch.innerHTML = amount_1inch_purchase;
	
		// Calculate fiat (USD) value of SWISE and (USD) purchase of 1inch
		total_value_swise = current_price_swise * amount_swise.value;
		total_cost_1inch = current_price_1inch * amount_1inch_purchase;
	
		// Update display for crypto dollar values
		value_swise.innerHTML = total_value_swise;
		cost_1inch.innerHTML = total_cost_1inch;
	
		// Update display
		startdate.innerHTML = new Date();
		enddate.innerHTML = new Date();
	
		// Calculate rewards earned
		swise_rewards_earned = amount_swise.value * ((apy.value / 100) / 365) * days.value; 	
		// Convert to fiat
		fiat_swise_rewards_earned = swise_rewards_earned * current_price_swise;
	
		// Update display
		swiseaward.innerHTML = swise_rewards_earned;
		swiseheadercard.innerHTML = swise_rewards_earned
		swiseamount.innerHTML = swise_amount;
		swiseawardfiat.innerHTML = fiat_swise_rewards_earned;
		ethtoswiseprice.innerHTML = eth_to_swise_price;
		ethtooneinchprice.innerHTML = eth_to_oneinch_price;
		apypercent.innerHTML = apy_percent;
		dayslefttofarm.innerHTML = days_left_to_farm;
		// farmingheadercard.innerHTML = days_left_to_farm;
	
		// Compute profit / loss
		finalprofit = fiat_swise_rewards_earned - swap_swise.value - swap_1inch.value;	
		finalprofitrealized.innerHTML = finalprofit;
		finalprofitheader.innerHTML = finalprofit;
};
