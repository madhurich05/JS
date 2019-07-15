function longestWord(sentence) {
    // create a filtered array
    const wordArr = sentence.toLowerCase().match(/[a-z0-9]+/g);
    // sort the array
    const sortedArray = wordArr.sort((a,b) => b.length - a.length); // this should have the first element with
    // the longest length
    
    // But if there is more than one, we need to filter all the elements

    const lwArray = sortedArray.filter((word)=> word.length === sortedArray[0].length);
    return (lwArray.length === 1) ? lwArray[0] : lwArray;
}

longestWord("Hello There I am Madhuri") // "madhuri"
