// write a function to calculate sum of squares of all elements in an array

function sumofSquares(arr){
    let count = 0
    for(let i=0;i<arr.length;i++){
    
    count = count + Math.pow(arr[i],2)  
    
    }

     return count
}

console.log(sumofSquares([1,2,3]))

 
 