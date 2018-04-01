function echo(stringEcho) {
    return stringEcho.toString();
}

function shout(stringShout) {
    return stringShout.toUpperCase();
}

function repeat(stringRepeat, x) {
    if (x) {
    		let repeatedStr = stringRepeat;
        i = x;
        while (i > 1) {
            repeatedStr += " " + stringRepeat;
            i--;
        }
        return repeatedStr;
    } else {
        return `${stringRepeat} ${stringRepeat}`
    }
}

function pieceOfWord(str, x) {
	return str.slice(0, x);
}

function firstWord(firstWord) {
	let index = firstWord.indexOf(" ")
	return firstWord.slice(0, index);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
    // This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator(title) {
        let toTitle = title.split(" ");
        let uppCase = capitalize(toTitle[0]) + " ";
        for (var i = 1; i < toTitle.length; i++) {
            i < toTitle.length - 1 ?

                toTitle[i].length > 4 ?
                	uppCase += capitalize(toTitle[i]) + " " :
                	uppCase += toTitle[i] + " " :

                toTitle[i].length > 4 ?
                	uppCase += capitalize(toTitle[i]) :
                	uppCase += toTitle[i];
        }

        return uppCase;
    }
module.exports = {
    echo,
    shout,
    repeat,
    pieceOfWord,
    firstWord,
    titleCreator
}