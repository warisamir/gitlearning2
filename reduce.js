
//storage  ->1 it basicly store the answer in storage itself
let arr=[1,2,3,4,5];
//s=s*ele
function sum(storage,elem)
{
    return storage+elem;
}
function product(storage,elem)
 {
    // console.log(storage,elem);
   return storage *elem;
}
//case1 without initial value =arr[0]
//examples
//  let fproduct=arr.reduce(product);
//  console.log(fproduct);
//  let fsum=arr.reduce(sum);
//  console.log(fsum);
//case2 we have initial value storage= provided value;
let f=arr.reduce(product,10);
console.log(f);


