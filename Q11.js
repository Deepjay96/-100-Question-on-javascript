// write a function that takes  input as number and returns the sum of its digits 

function sumofDigits(no){
    let a = no.toString()
     let count = 0
    for(let i in a){
         count = count + parseInt(a[i])
      }
     
      return count
}

console.log(sumofDigits(1221))



