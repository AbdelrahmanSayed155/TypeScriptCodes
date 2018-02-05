module arrowFunctions{

// function paly(){
//     return "Playing ";
// }

//        param    return type
// let play:(      )=>void;

// let play:(name:string)=>void;


let play:(name:string)=>void = (name:string)=>{
    alert("Declarting " + name);
}

// calling it 
play("Abdo");

function Fruit(){
    this.fruit = "Orange";
    this.getFruit =()=>{
        return this.fruit;
    }
}
let fru =  new Fruit();
alert(fru.getFruit());

function printRestParam(...param:number[]){
    param.forEach((value)=>console.log(value));
}

 let printRestParam2 = (...param:number[])=>{
    param.forEach((value)=>console.log(value));
}


}