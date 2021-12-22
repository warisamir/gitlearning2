//var is function scope
var a;
a=10;
function fn()
{
    console.log("beforee declaration ",a);
    var a;
    console.log("after declaration",a);
//a=20;
    console.log("after initialisation",a);
}
fn();