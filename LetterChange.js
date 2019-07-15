// Change every letter of string to the next letter
// if vowel, it should be capitalized
// if it is z /Z, it should be replaced by a
function letterChange(str) {

    let newStr = str.toLowerCase().replace(/[a-z]/gi, function (char) {
        if (char === 'z' || char === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });
    newStr = newStr.replace(/a|e|i|o|u/gi , function(vowel){
        return vowel.toUpperCase();
    });
    return newStr;
}

letterChange("Hello There") // "Ifmmp UIfsf"
