function todo<T>(x:T){
    console.log(x);
}

todo(45);
todo("Abdelrahman Sayed Mohamed");
todo({name:"Abdekrahman", age:26});

class OP<T,S>{
    add (x:T,y:S){
     if(( typeof(x)=="number") && typeof(y) =="number" ){
      console.log("The Result:"+(x+y));
     }else{
       console.log("The Result:"+x+" "+y);
     }
    }
}
var op:OP<number,number> = new OP<number,number>();
op.add(10,20);

