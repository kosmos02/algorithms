// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowelCount = 0

    const lowerString = str.toLowerCase()

    for (let i = 0; i < str.length; i++){
        if (lowerString[i] === 'a' || lowerString[i] === 'e' || lowerString[i] === 'i' || lowerString[i] === 'o' || lowerString[i] === 'u'){
            vowelCount++
        } 
    }
    return vowelCount
}

module.exports = vowels;
