function flatternArray(arrChunks) {

    return [].concat.apply([],arrChunks);
}
// Solution 2
function flatternArray(arrChunks) {

    return [].concat(...arrChunks);
}
arrChunks // (5) [Array(2), Array(2), Array(2), Array(2), Array(1)
flatternArray(arrChunks); // (9) [2, 4, 6, 3, 6, 9, 4, 8, 12]
