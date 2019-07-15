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
undefined
isAnagram("cinema","iceman")
true
isAnagram("cinema","icemane")
false
