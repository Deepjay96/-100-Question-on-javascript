// write a function to find max number in array

function findMax(ar){
    
    let b_ar = ar.sort((a, b) => a - b);
    console.log(b_ar[b_ar.length-1]) 
    
}

findMax([12, 3, 34, 5, 90])



