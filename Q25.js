// write a function to calculate the factorial of a number 

function factorial(a){
    let fact =1

    for(let i=a;i>0;i--){
          fact = fact*i
    }
    
      return fact
}

console.log(factorial(5))
