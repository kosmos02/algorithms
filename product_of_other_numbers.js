// You have a list of integers, and for each index you want to find the product of every integer except the integer at that index.

// Write a function get_products_of_all_ints_except_at_index() that takes a list of integers and returns a list of the products.


const array = [1, 7, 3, 4]

function get_products_of_all_ints_except_at_index(array){
    let result = []

    for (let i = 0; i < array.length; i++){
        let product = 1
        for (let j= 0; j< array.length; j++){
            if (i != j){
                product *= array[j]
            }
        }
        result.push(product)
    }
    return result
}

console.log(get_products_of_all_ints_except_at_index(array))