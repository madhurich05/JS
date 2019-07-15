// Return the character that occurs the most in a given string
function getMaxChars(str) {
    let charMap = {};
    str.split('').forEach( (char) => {
        if(charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });
 return Object.keys(charMap).reduce((a, b) => charMap[a] > charMap[b] ? a : b);
}
