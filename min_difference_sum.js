// function minDiffSum(array){
//     let differences = []

//     for (let i = 0; i < array.length; i++){
//             if ( i === array.length - 1){
//                 break
//             }
//             else {
//                 let difference = array[i + 1] - array[i]
//                 differences.push(difference)
//             }
//     } 
//     const arrSum = differences.reduce((a, b) => a + b, 0)
//     return arrSum

// }

// minDiffSum([1,2,3,5,10])

// function minDiffSum(array){
//     let differences = []
//     let sum = 0

//     for (let i = 0; i < array.length; i++){
//             if ( i === array.length - 1){
//                 break
//             }
//             else {
//                 let difference = array[i + 1] - array[i]
//                 differences.push(difference)
//             }
//     } 
//     differences.forEach(currentNum => {
//         sum += currentNum
//     })
//     console.log(sum)
//     return sum

// }

function minDiffSum(arr) {
	var result = 0;
	for (var i = 1; i < arr.length; i++) {
		result += Math.abs(arr[i] - arr[i - 1]);
	}
	return result;
}

console.log(minDiffSum([1,2,3,5,10]))