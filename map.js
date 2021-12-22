let arr=[5,7,19,12,13 ,14];
function sqare(x){
    return x*x;
}
function cuber(num){
    return num*num*num;
}
//map implement->library implementation
//function as anargument array
//return oko new function

function myMap(arr,cb){
    let nar=[];
    for(let i=0;i<arr.length;i++){
        let ans=cb(arr[i]);
        nar.push(ans);
    }
return nar;
}
let newarr=myMap(arr,sqare);
console.log(newarr);
let cubear=myMap(arr,cuber);
console.log(cubear);

