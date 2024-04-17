// write a function calculateMean that takes an array of numbers as input and returns the mean of those numbers

function  calculateMean(a){
  
        if(a.length  === 0){
            return 0
        }

        let count = 0

        for(let i=0;i<a.length;i++){
            count = count + a[i]     
        } 
    
        return count/a.length
   
  
}

console.log(calculateMean([10,2]))