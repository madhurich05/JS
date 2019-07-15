function chunkedArray(arr,len) {
    let chunkedArray = [];
    let i = 0;
    while(i<arr.length) {
        chunkedArray.push(arr.slice(i,i + len));
        i += len;
    }
    return chunkedArray;
}


let arr1 = [2, 4, 6, 3, 6, 9, 4, 8, 12];
chunkedArray(arr1, 2) 
// returns [Array(2), Array(2), Array(2), Array(2), Array(1)]
0: (2) [2, 4]
1: (2) [6, 3]
2: (2) [6, 9]
3: (2) [4, 8]
4: [12]
