function fn(param1,param2){
    console.log("inside fn",param1,param2);
}

function fn(){
    console.log(arguments);
    console.log(param1,param2);
}
fn("hello","hi");
//if something is missing then default-> undefined
fn("Helo");
//
//fn();
fn("hello","hi","bye");



