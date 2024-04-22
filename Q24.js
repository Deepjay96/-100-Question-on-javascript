// find the mode in array  

function countOccurreneces(a){
    let count = {}
    let maxNum = 0;
    let mode ;

    for(let element of a){
          count[element] = (count[element] || 0) + 1
          if(count[element] > maxNum){
               maxNum = count[element]
               mode = maxNum
          }
    }

    return mode
}

console.log(countOccurreneces([9,2,5,2,8,9,1,9]))



