// write a function that return smallest element from an array

let b = []

function findMin(arr){

    let b = arr.sort((a,b) => a-b)
    return b[0]
}

console.log(findMin([12,3,4,-1,-90]))



