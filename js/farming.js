// Global variables
var amount_1inch_purchase = 0;
var total_value_swise = 0;
var total_cost_1inch = 0;
var farming_start_date = new Date();
var farming_end_date = new Date();
var swise_rewards_earned = 0;
var fiat_swise_rewards_earned = 0;
var final_profit = 0;
var swise_1inch_ratio = 0;

function showCalculation() {

	// Calculate ratio
	swise_1inch_ratio = current_price_of_1inch.value /  current_price_of_swise.value;
	
	// Determine how much 1inch to purchase
	amount_1inch_purchase = amount_swise.value / swise_1inch_ratio;
	
	// Calculate rewards earned
	swise_rewards_earned = amount_swise.value * ((apy.value / 100) / 365) * days.value; 	
	
	// Calculate fiat (USD) value of SWISE and (USD) purchase of 1inch
	total_value_swise = current_price_of_swise.value * amount_swise.value;
	total_cost_1inch = current_price_of_1inch.value * amount_1inch_purchase;

	// Convert to fiat
	fiat_swise_rewards_earned = swise_rewards_earned * current_price_of_swise.value;

	// Compute profit / loss
	finalprofit = fiat_swise_rewards_earned - swap_swise.value - swap_1inch.value;	

	// Update display fields
	currprice_ethereum.innerHTML = current_price_of_eth.value;
	dayslefttofarm.innerHTML = days.value;
	currprice_swise.innerHTML = current_price_of_swise.value;
	currprice_1inch.innerHTML = current_price_of_1inch.value;
	value_swise.innerHTML = total_value_swise;
	cost_1inch.innerHTML = total_cost_1inch;
	ethtoswiseprice.innerHTML = swap_swise.value;
	ethtooneinchprice.innerHTML = swap_1inch.value;
	swiseamount.innerHTML = amount_swise.value;
	swiseaward.innerHTML = swise_rewards_earned;
	swiseawardfiat.innerHTML = fiat_swise_rewards_earned;
	purchase_1inch.innerHTML = amount_1inch_purchase;
	apypercent.innerHTML = apy.value;
	finalprofitrealized.innerHTML = finalprofit;
};
