// Description: Get current crypto prices

var current_price_ethereum = 0;
var current_price_swise = 0;
var current_price_1inch = 0;

// Description: Function to parse JSON returned from an URL and store the data
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
				alert('Something went wrong: ' + err.message);
		} else {
				current_price_swise = data.market_data.current_price.usd;
				currprice_swise.innerHTML = current_price_swise;
		}
	}
);

// Get 1 inch data
getJSON('https://api.coingecko.com/api/v3/coins/1inch?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true',
	function(err, data) {
		if (err !== null) {
				alert('Something went wrong: ' + err.message);
		} else {
				current_price_1inch = data.market_data.current_price.usd;
				currprice_1inch.innerHTML = current_price_1inch;
		}
	}
);

// Get Ethereum data
getJSON('https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=true',
	function(err, data) {
		if (err !== null) {
				alert('Something went wrong: ' + err.message);
		} else {
				current_price_ethereum = data.market_data.current_price.usd;
				currprice_ethereum.innerHTML = current_price_ethereum;
		}
	}
);
