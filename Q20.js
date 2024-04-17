// write a function to reverse a string

function  reverseString(a){
    let s = ""
    for(let i=a.length-1;i>=0;i--){
          s = s + a[i]    
    }    

     return s

}

console.log(reverseString("Hello"))

