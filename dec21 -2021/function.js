// function out(){
//   console.log(parm);
//   param();
// }
// function chotafn(){
// console.log("hello i am rocky");
// }
// //function can be passed ass a parameter to another function
// out(chotafn);
// //function's refrerne can be stroed in another variable
// int a=[1,2,3,4,5];
// int b=a;
// //function expression
// let anothername=function(){
//     console.log("i am an Expression");
// }
// anothername();
// function fn(){
//     return "hello";
// }
// let rval=fn();
//console.log(rval);

function outer(){
    console.log("hello i am outer function ");
    return function inner(){
        console.log("i am Innner");
    }
}
let rv=outer();
console.log(rv);
rv();




