function capitalize(word){
    let word1 = word;
    word1 = word1.toLowerCase();
    let firstLetter = word1.charAt(0).toUpperCase();
    word1 = word1.slice(0);
    let wordreturn = firstLetter.concat(word1);
    return wordreturn;
}
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}
function convertToBinary(num){
    let outputNumber = num;
    outputNumber = outputNumber.toString(2);
    return outputNumber;
}
function generateRandomFloat(n) {
   return Math.floor(Math.random() * 100).toFixed(n);
}
function isPalindrom(str){
    let Wordpalindrom = str;
    Wordpalindrom = Wordpalindrom.toLowerCase().raplaceAll(" " "" );

}