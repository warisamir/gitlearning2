//global execution context
// console.log("before declaration",a)
//  var a;
// console.log("after declaration ",a);
// a=10;
//  console.log("after initialization",a);
// function fn(){
// console.log("before declaration",a);
//   var a;
//   console.log("After declaration",a);
//   a=20;
//   console.log("after initialisation",a);
// }

//fn();
//next ques
function fn(){
    //var is function scope
    console.log("before declaration",a);
    var a;
    console.log("after declaration ",a);
    a=20;
    if(true){
        var a=30;
        console.log("34",a);
    }
    console.log("after intialization",a);
}
fn();








