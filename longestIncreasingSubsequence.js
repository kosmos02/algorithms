let array = [1, 5, 2, 7, 3]

function longestIncreasingSubsequence(array){
//     let longestSubsequences = []

//     let currentSubsequence = [array[0]]

//     let currentNum = array[0]

//     let currentIndex = 1

//     while (currentIndex < array.length){
//         for (let i = 1; i < array.length; i++){
        
//             if (array[i] > currentNum){
//                 currentSubsequence.push(array[i])
//                 currentNum = array[i]
//             }
//         }
    
//         if (currentSubsequence.length > longestSubsequences.length){
//             longestSubsequences.push(currentSubsequence)
//         }
//         currentIndex++
//     }

    
//     console.log(longestSubsequences)

    const lengthsArr = Array(array.length).fill(1)
    let prevElidx = 0
    let currElIdx = 1

    while (currElIdx < array.length){
        if (array[prevElidx] < array[currElIdx]){
            const newLen = lengthsArr[prevElidx + 1]
            if (newLen > lengthsArr[currElIdx]){
                lengthsArr[currElIdx] = newLen
            }
        }
        prevElidx += 1
        if (prevElidx === currElIdx) {
            currElIdx += 1;
            prevElidx = 0;
          }
    }
    let longestIncreasingLength = 0;

  for (let i = 0; i < lengthsArr.length; i += 1) {
    if (lengthsArr[i] > longestIncreasingLength) {
      longestIncreasingLength = lengthsArr[i];
    }
  }

  return longestIncreasingLength

}

console.log(longestIncreasingSubsequence(array))

// hi there my name is alex