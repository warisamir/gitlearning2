let arr=[5,7,19,12,13,14]
//remove all prime 
function isPrime(n){
    let isPrime=true;
 for(let div=2;div<=n;div++)
     {
        if(n%div==0)
        isPrime=false;
     }

return isPrime;
}
let b=arr.length;
for(var i=0;i<b;i++){
    let re=isPrime(arr[i]);
    if(re==true)
   {
      arr.splice(i,1);
   }
}
console.log(arr);

