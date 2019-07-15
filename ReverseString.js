function revString(str) { 
    let revString = '';
    for (let char of str) { 
        revString = char + revString 
    }
	return revString;
}

function revString(str) { 
    let revString = '';
    return str.split('').reduce((revString,char) => char + revString ,'');

}

function revString(str) { 
    let revString = '';
    str.split('').forEach(char => revString = char + revString);
    return revString; 

}

revString("Hello"); // "olleH"
