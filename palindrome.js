function revString(str) { 
    let revString = '';
    return str.split('').reduce((revString,char) => char + revString ,'');

}

function palindrome(str) {
    return revString(str) === str;
}
palindrome("madam") // true
palindrome("madame") // false
