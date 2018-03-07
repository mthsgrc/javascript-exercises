
let sumAll = function(beginCountNumber, endCountNumber){
	let totalValue = 0;
	
	if (beginCountNumber < 0 || endCountNumber < 0 || isNaN(endCountNumber) || isNaN(beginCountNumber) ){
			return "ERROR";
	}	else if (typeof beginCountNumber != 'number' || typeof endCountNumber != 'number'){
			return "ERROR";
	} else if (beginCountNumber < endCountNumber){
		for (beginCountNumber; endCountNumber >= beginCountNumber; beginCountNumber++){
			totalValue += beginCountNumber;
		}
		return totalValue;

	} else if (beginCountNumber > endCountNumber){
		for (endCountNumber; beginCountNumber >= endCountNumber; endCountNumber++){
			totalValue += endCountNumber;
		}
		return totalValue;
		// totalValue < 0 ? totalValue = totalValue : totalValue = "ERROR";
	}

}

module.exports = sumAll
