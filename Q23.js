// write a Javascript function to count the occurrences of each element in an array and store the counts in an object

function countOccurreneces(a){
    let count = {}

    for(let element of a){
          count[element] = (count[element] || 0) + 1
    }

    return count
}

console.log(countOccurreneces([1,2,2,3,1,4,2,4,1,4,4]))



