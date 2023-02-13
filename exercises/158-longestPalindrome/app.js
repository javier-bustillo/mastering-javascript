function findLongestPalindrome(sentence) {
    // split sentence into words
    // iterate words and collect the palindromes
    // sort the list of palindromes by word length
    // return the largest item in the sorted list


}

function reverseString(string) {
    let strIntoWords = string.split(" ");
    let reverseWords = [];
    for (word of strIntoWords) {
        reverseWords.push(word.split("").reverse().join(""));
    }
    return reverseWords;
}

function isPalindrome(word) {
    // hint: you can detect palindromes by comparing a string to its reverse
    for (word of reverseString()) {
        console.log(word);
        for ()
    }

}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // "a racecar a"
console.log(reverseString("My dad is a racecar athlete"));