var reverseString = function(word) {
	let splitWord = word.split('');
	splitWord = splitWord.reverse();
	splitWord = splitWord.join('');

	word = splitWord;
	return word;
}

module.exports = reverseString