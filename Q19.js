// write a function to check if a given string starts with a specific substrin

function startswith(str,startstr){
     let b = str.split(" ")

     if(b[0] === startstr){
          return true
     }else{
         return false
     }
      
}


console.log(startswith("near Jay" , "near"))











