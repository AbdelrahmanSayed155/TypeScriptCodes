
module ep{
console.log("Starting function in TS ");

function info(name:string , age:number ){
    return 'user name:{'+name+"} age{"+age+"}";
}
console.log(info("Abdelrahman Sayed ",12));
var infoOf = info("Abdelrahman Sayed ",12);

function todo(x:number|string){
if(typeof(x) === "string"){
console.log(" parameter is String it is "+ x);
}else if(typeof(x) === "number"){
    console.log(" parameter is number it is "+ x);
}
}
todo("Abdelrahman Sayed Mohamed");
todo(12);

// overload with the same bussiness 
function todoOverLoad(x:number, yboolean)
function todoOverLoad(x:number|string, y:any|boolean){
    if(typeof(x) === "string"){
    console.log(" parameter is String it is "+ x);
    }else if(typeof(x) === "number"){
        console.log(" parameter is number it is "+ x);
    }
}
///function with defualt values 
function play(name:string="FootBall"){
console.log(name);
}

function play2(name:string[]=["FootBall","BasketBall","VollyBall"]){
    name.forEach(value=>console.log(value));
    }

}
