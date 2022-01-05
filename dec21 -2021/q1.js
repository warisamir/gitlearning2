// function outer(){
//     const arr=[]
//     for(const i=0;i<3;i++){
//         arr.push(function (){
//             console.log(i)
//         })
//     }
//     return arr;
// }

//without  uasing let print i=0,1,2
//solution using exeution context

function outer(){
    var arr=[]
    for(var i=0;i<3;i++){
        function outer1(){
           var j=i;
           return function(){
            console.log(j);
        }
    }
    arr.push(outer1());
}
    return arr;
}

console.log("before caLLING ");
var arr=outer();
arr[0]();
arr[1]();
arr[2]();
console.log("after calling ");


