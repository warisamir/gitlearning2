//hf on arrays 
//it taksa function and return a new  filtered array
//test function return true or false 
//
//filter function calls the given function on every element of that array
//fnctin return 
//true then u wil add that ele to new array
//false then not that add elenet to new array
let arr=[2,3,5,6,7,8];
function check(n){
    return n%2==0;
}
let nar= arr.filter(check);
 console.log(nar);


function myfiltr(arr,test){
    let nar=[];
    for(let i=0;i<arr.length;i++){
        if(test(arr[i])==true){
            nar.push(arr[i]);
        }
    }
    return nar;
}
let newar=myfiltr(arr,check);
console.log(newar); 







