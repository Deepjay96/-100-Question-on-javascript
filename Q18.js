// write a function to check if a character is uppercase or lowercase 

function isUppercase(char1){
        if(char1.charCodeAt() > 64 && char1.charCodeAt()  < 91){
                      return true
        }else{
             return false
        }
}

function isLowercase(char2){
    if(char2.charCodeAt() > 96 && char2.charCodeAt()  < 123){
        return true
     }else{
        return false
    }
}


console.log(isUppercase('A'))

console.log(isLowercase('a'))