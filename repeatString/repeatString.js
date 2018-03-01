var repeatString = function(word, times) {
	let x = 0;
	let wordRepeated = '';

	if (times < 0) {
		return 'ERROR'
	}

	while(x < times){
		wordRepeated += word;
		x++;
	}
	return wordRepeated;
}

module.exports = repeatString
