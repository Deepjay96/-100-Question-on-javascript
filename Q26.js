// write a function to find the nth Fibonacci number

function fibonacci(num){
    let a = [0,1]

    for(let i=0;i<num;i++){
          a.push(a[i]+a[i+1])
    }
    
    let fibo = a[num-1]+a[num-2]
    
    return fibo
}


console.log(fibonacci(8))