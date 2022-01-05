// function out(first){
//     console.log("inside outerr");
//     return function inner(second){
//         console.log("inside inner");
//         return first*second;
//     }
// }
// let rv=out(2*10);
// console.log("before callng rv that contains inner");
// let ans=rv(4);
// console.log(ans);


//prsatical example
function entere(fis){
    return function enterlast(last){
        return function enterage(age){
            return function printdetail(){
            console.log("your name is "+fis+last+"your age is "+age);
    }
}
}
}
console.log("kindly enter your first name");
let enterlast=entere("rocky");
console.log("kindly enrter lastname");
let enterage=enterlast("ansari");
console.log("enter  your age");
let printdetail=enterage(23);
console.log("doing random stuff");
printdetail();

