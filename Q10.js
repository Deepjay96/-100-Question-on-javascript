
let n = [1,2,3,5]

let m = [1,2,3,4]

function arraysareEqual(a1,a2){
    if(a1.length  !== a2.length){
        return false
    }

  return  a1.every((v,i) => v === a2[i] )
    
}

console.log(arraysareEqual(n,m))








