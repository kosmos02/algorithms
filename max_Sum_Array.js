function findMaxSubArray(arr){
    let maxSoFar = Number.NEGATIVE_INFINITY;
        leftIndex = 0
        rightIndex = arr.length - 1

    for (let i = 0; i < arr.length; i++){
        let maxSum = 0

        for (let j = i; j < arr.length; j++){
            maxSum += arr[j];

            if (maxSoFar < maxSum){
                leftIndex = i
                maxSoFar = maxSum
                rightIndex = j
            }
        }
    }
    return {
        lef: leftIndex,
        right: rightIndex,
        finalMaxSubArray: maxSoFar
    }
}

let array = [-2, 1, -3, 4, -2, 2, 1, -5, 4]

console.log(findMaxSubArray(array))