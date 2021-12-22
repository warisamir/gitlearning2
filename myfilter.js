Array.prototype.myFilter=function(test){
    let newarr=[];
    for(let i=0;i<this.length;i++)[
        if(test(this[i])===true){
         newarr.push(this[i]);
        }
}
return newArr;
}
let ar=[2,3,5,6,7,8];

function check(num){
    return num%2==1;
}
let filterA=arr.myFilter(check);
console.log(filterA);


















