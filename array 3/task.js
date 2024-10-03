let even=[1,2,3,4,5,6,7,8,9];
    let sum=0;

    even=even.filter(function(el,i){
       return el % 2==0 
    })
    console.log(even)

    sum=even.reduce(function(acc,curr){
        return acc+curr
    },0)
    console.log(sum)

    sum1=even.reduce(function(acc1,curr1){
        return acc1+curr1
    },5)
    console.log(sum1)

   