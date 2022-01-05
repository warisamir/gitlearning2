function fun(){
   //this.a=10
   //let a=10;//it a function scoped variable
     this.a=10//its a global variable//it make a copy over global 
    console.log(a);
}

fun();
console.log(a);

//global ,obj,new 







