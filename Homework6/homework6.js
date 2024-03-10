function capitalize(word){
    let word1 = word;
    word1 = word1.toLowerCase();
    let firstLetter = word1.charAt(0).toUpperCase();
    word1 = word1.slice(0);
    let wordreturn = firstLetter.concat(word1);
    return wordreturn;
}
