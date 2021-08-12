module.exports = function reverse (n) {
    let newNumber=[];
    if(n<0){
      n= Math.abs(n);
      while(n>0){
    newNumber.push(n%10);
    n=Math.floor(n/10);
    }
    }
    else{ 
    while(n>0){
    newNumber.push(n%10);
    n=Math.floor(n/10);
    }
    }
    newNumber=newNumber.join("");
    newNumber=Number.parseInt(newNumber);
    return newNumber;
 }

