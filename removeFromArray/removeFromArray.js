var removeFromArray = function(arrValues, toRemove) {

	let arrayValues = Array.from(arguments[0]);


	for (var i = 0; i < arrayValues.length; i++) {
		if (arrayValues[i] == toRemove){
			removedArrayValues = arrayValues.splice(i, 1);
			return arrayValues;
		}
	}

}

module.exports = removeFromArray
