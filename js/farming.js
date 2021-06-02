// Global variables

var swise_amount = 0;
var days_left_to_farm = 0;
var apy_percent = 0;

var swap_ethereum_swise = 0;
var swap_ethereum_1inch = 0;
var amount_swise_invest = 0;
var amount_1inch_purchase = 0;
var estimated_apy = 0;
var days_left_to_farm = 0;
var total_value_swise = 0;
var total_cost_1inch = 0;
var farming_start_date = new Date();
var farming_end_date = new Date();
var swise_rewards_earned = 0;
var fiat_swise_rewards_earned = 0;
var oneinch_rewards_earned = 0;
var final_profit = 0;
var swise_1inch_ratio = 0;

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


function showCalculation() {
	alert("Found function");
	// Set swise amount investing
	swise_amount = amount_swise.value;
	alert(swise_amount);

	//set days left to farm
	days_left_to_farm = days.value;

	// Set apy %
	apy_percent = apy.value;
		
	// Set eth 1inch swap price
	eth_to_oneinch_price = swap_1inch.value;
		
	// Set eth to swise swap price
	eth_to_swise_price = swap_swise.value;
		
	// Calculate ratio
	swise_1inch_ratio = current_price_1inch / current_price_swise;
	
	// Determine how much 1inch to purchase
	amount_1inch_purchase = amount_swise.value / swise_1inch_ratio;
	
	// Calculate rewards earned
	swise_rewards_earned = amount_swise.value * ((apy.value / 100) / 365) * days.value; 	
	
	// Calculate fiat (USD) value of SWISE and (USD) purchase of 1inch
	total_value_swise = current_price_swise * amount_swise.value;
	total_cost_1inch = current_price_1inch * amount_1inch_purchase;

	// Convert to fiat
	fiat_swise_rewards_earned = swise_rewards_earned * current_price_swise;

	// Compute profit / loss
	finalprofit = fiat_swise_rewards_earned - swap_swise.value - swap_1inch.value;	

	// Update display fields
	purchase_1inch.innerHTML = amount_1inch_purchase;
	value_swise.innerHTML = total_value_swise;
	cost_1inch.innerHTML = total_cost_1inch;
	startdate.innerHTML = new Date();
	enddate.innerHTML = new Date();
	swiseaward.innerHTML = swise_rewards_earned;
	swiseheadercard.innerHTML = swise_rewards_earned
	swiseamount.innerHTML = swise_amount;
	swiseawardfiat.innerHTML = fiat_swise_rewards_earned;
	ethtoswiseprice.innerHTML = eth_to_swise_price;
	ethtooneinchprice.innerHTML = eth_to_oneinch_price;
	apypercent.innerHTML = apy_percent;
	dayslefttofarm.innerHTML = days_left_to_farm;
	// farmingheadercard.innerHTML = days_left_to_farm;
	finalprofitrealized.innerHTML = finalprofit;
	finalprofitheader.innerHTML = finalprofit;
};
