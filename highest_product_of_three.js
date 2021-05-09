let inputList = [3, 6, 2, 8, 22, 15, 30, 9]

function highestProductOfThree(array){
    const sortedArray = array.sort( function(a, b){return a - b })
    return sortedArray[sortedArray.length - 1] * sortedArray[sortedArray.length - 2] * sortedArray[sortedArray.length - 3]
}

console.log(highestProductOfThree(inputList))