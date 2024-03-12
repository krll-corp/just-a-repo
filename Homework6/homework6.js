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
    Wordpalindrom = Wordpalindrom.toLowerCase().raplaceAll(" ", "");
    let Wordpalindromafter = reverseString(Wordpalindrom);
    return Wordpalindrom === Wordpalindromafter;

}
function sumOfNumbers(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}
function generateNumberInLimit(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
function toCamelCase(str) {
    let camelCaseStr = '';
    let capitalizeNext = false;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '_') {
            capitalizeNext = true;
        } else {
            if (capitalizeNext) {
                camelCaseStr += str.charAt(i).toUpperCase();
                capitalizeNext = false;
            } else {
                camelCaseStr += str.charAt(i);
            }
        }
    }

    return camelCaseStr;
}

