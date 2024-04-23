// write function called repeatstring that takes two arguments  

let new_str = ""
let no = 0
function repeatString(str,num){
    while(no<num){
        for(let i =0;i<str.length;i++){
            new_str = new_str + str[i]   
    }
       no++
    }   

    return new_str

}

console.log(repeatString("abc",5))

