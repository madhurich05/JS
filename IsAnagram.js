function isAnagram(s1,s2) {
    return formatStr(s1) === formatStr(s2);
}
function formatStr(str) {
    return str
    .replace(/[^\w]/g,'')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

isAnagram("cinema","iceman")
true
isAnagram("cinema","icemane")
false
isAnagram("dormitory","dirty #room")
true
