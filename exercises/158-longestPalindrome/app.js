function findLongestPalindrome(sentence) {
    let longestPalindrome = '';

    for (let i = 0; i < sentence.length; i++) {
        let word = '';
        for (let j = i; j < sentence.length; j++) {
            word += sentence[j];
            if (isPalindrome(word) && word.length >
                longestPalindrome.length) longestPalindrome = word;
        }
    }
    return longestPalindrome;
}

function reverseString(string) {
    let strReversed = string.split('').reverse().join('');
    return strReversed;
}

function isPalindrome(word) {
    let wordIsPalindrome = word.length > 1 &&
        word.toLowerCase() === reverseString(word.toLowerCase());
    return wordIsPalindrome;
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // "a racecar a"