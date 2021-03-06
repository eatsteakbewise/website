//
// Description: Update a table that stores gas prices 
// To Do: Include this right after the HTML table that is used for gas
//

var wsObj;
var wsUrl = 'wss://www.gasnow.org/ws';

// HTML table must have the following ids - rapid, fast, standard and slow
var rapidObj = document.getElementById('rapid');
var fastObj = document.getElementById('fast');
var standardObj = document.getElementById('standard');
var slowObj = document.getElementById('slow');

// Function to update HTML table with new gas prices
var updatePageGasPriceData = data => {
	console.log(data.gasPrices);
	if (data && data.gasPrices) {
		rapidObj.innerHTML = (data.gasPrices.rapid / 1000000000).toFixed(0);
		fastObj.innerHTML = (data.gasPrices.fast / 1000000000).toFixed(0);
		standardObj.innerHTML = (data.gasPrices.standard / 1000000000).toFixed(0);
		slowObj.innerHTML = (data.gasPrices.slow / 1000000000).toFixed(0);
	}
};

// open websocket connection
wsObj = new WebSocket(wsUrl);
wsObj.onopen = evt => {
	console.log("Connection opened.");
};

// handle the event
wsObj.onmessage = evt => {
	const dataStr = evt.data;
	const data = JSON.parse(dataStr);
	// if we have data, update the page
	if (data.type) {
		updatePageGasPriceData(data.data);
	}
};

// handle the close event
wsObj.onclose = evt => {
	console.log("Connection closed.");
};
