// Return sum of all parameters entered regardless of amount of numbers - No Arrays
// using for each

function addAll(...nums) {
    let total = 0;
    nums.forEach(num => { total+= num; });
    return total;
}

// using reduce
function addAll(...nums) {
    return nums.reduce((acc, num) => acc + num);
}

addAll(2,3,4,5); //14
