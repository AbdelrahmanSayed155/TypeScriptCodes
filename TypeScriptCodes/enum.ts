
enum operation{
    Add = 1,
    Sub = 2,
    Mul = 3,
    Div = 4
}

var x = 10;
var y=20;
var choose=1;

if(choose==operation.Add){
    console.log("Reslut"+(x+y));
}else if(choose==operation.Sub){
    console.log("Reslut"+(x-y));
}else if(choose==operation.Mul){
    console.log("Reslut"+(x*y));
}else if(choose==operation.Div){
    console.log("Reslut"+(x/y));
}else{
    console.log("Unkown Input Parameters ");
}