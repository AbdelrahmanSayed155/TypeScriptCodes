class Animal{
    private name:string;
    private weight:number;
    private hiehgt:number;

    constructor(name:string,weight:number,hiehgt:number){
        this.name = name;
        this.weight = weight;
        this.hiehgt = hiehgt;
    }
    set Name(name:string){
      this.name=name;
    }
    get Name(){
        return this.name;
    }
    set Weight(weight:number){
        this.weight=weight;
      }
      get Weight(){
          return this.weight;
      }
      set Hiehgt(hiehgt:number){
        this.hiehgt=hiehgt;
      }
      get Hiehgt(){
          return this.hiehgt;
      }
    getPrice():number{
        return this.hiehgt * this.weight;
    }

}
var anim:Animal = new Animal("Loin",12,50);
console.log(anim.getPrice());
document.getElementById('animal').innerHTML = anim.getPrice().toString();


//// abstraction class 

abstract class Shape{
   private  name:string;
constructor(name:string){
    this.name= name;
}
 get Name(){
    return this.name;
 }
 getInfoForShape():string{
     return "Name of Shape is " + this.name;
 }

}

class Triangle extends Shape{
    private height:number;
    private weight:number;
    // constructor(name:string,height:number,weight:number){
    //     super(name);
    //     this.height = height;
    //     this.weight = weight;
    // }
        constructor(height:number,weight:number){
        super("Triangle");
        this.height = height;
        this.weight = weight;
    }
    set  Height(height:number){
        this.height = height;
    }
    get  Height(){
       return  this.height;
    }
    set  Weight(weight:number){
        this.weight = weight;
    }
    get Weight(){
       return  this.weight;
    }

    getInfo(){
        return super.Name + " " + this.height+" "+ this.weight;
    }
}

class Cicle extends Shape{
    private  nk:number;
    constructor(nk:number){
        super("Circle");
        this.nk = nk;
    }

    set Nk(nk:number){
        this.nk = nk;
    }

    get Nk(){
        return this.nk ;
    }

    getCircleInfo(){
        return super.Name +"   " + this.Nk;
    }
}

var tarn:Triangle =  new Triangle(12,20);
console.log(tarn.getInfo());



/// typeScrit have Private And public And Protected As Access Modifier  And static 



