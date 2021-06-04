// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const fixedStringA = stringA.replace(/[^\w]/g, "").toLowerCase()
    const fixedStringB = stringB.replace(/[^\w]/g, "").toLowerCase()

    let charMapA = createCharMap(fixedStringA)
    let charMapB= createCharMap(fixedStringB)


    if (Object.keys(charMapA).length != Object.keys(charMapB).length){
        return false
    } else {
        let counter = 0
        for (let char in charMapA){
            if (charMapA[char] != charMapB[char]){
                return false
            }
        }
        return true
    }

}

function createCharMap(charArray){
    charMap = {}

    charArray.split('').map(char => {
        if (!charMap[char]){
            charMap[char] = 1
        } else {
            charMap[char]++
        }
    })
    return charMap
}

console.log(anagrams("HELLO THERE!!!!!", "hello there"))

module.exports = anagrams;

// word.replace(/[^\w]/g, "").toLowerVase()

//using sort instead

// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB)
// }

// function cleanString(str){
//     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
// }