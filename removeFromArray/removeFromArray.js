var removeFromArray = function(...args) {
	const resultArray = args[0];
	return resultArray.filter(val => !args.includes(val)) ;
}

module.exports = removeFromArray
