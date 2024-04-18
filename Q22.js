// write a function to return median of array

function findMedian(a){
    let b;
    let c;
    if(a.length % 2 != 0){
          b = Math.floor(a.length/2)
        return  console.log(a[b])
    }else{
          c = (a.length/2)-1
        return  console.log((a[c]+a[c+1])/2)
    }
}

findMedian([1,2,3,4,5,6,7,8])

