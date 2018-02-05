class Animal {
    constructor(name, weight, hiehgt) {
        this.name = name;
        this.weight = weight;
        this.hiehgt = hiehgt;
    }
    set Name(name) {
        this.name = name;
    }
    get Name() {
        return this.name;
    }
    set Weight(weight) {
        this.weight = weight;
    }
    get Weight() {
        return this.weight;
    }
    set Hiehgt(hiehgt) {
        this.hiehgt = hiehgt;
    }
    get Hiehgt() {
        return this.hiehgt;
    }
    getPrice() {
        return this.hiehgt * this.weight;
    }
}
var anim = new Animal("Loin", 12, 50);
console.log(anim.getPrice());
document.getElementById('animal').innerHTML = anim.getPrice().toString();
//// abstraction class 
class Shape {
    constructor(name) {
        this.name = name;
    }
    get Name() {
        return this.name;
    }
    getInfoForShape() {
        return "Name of Shape is " + this.name;
    }
}
class Triangle extends Shape {
    // constructor(name:string,height:number,weight:number){
    //     super(name);
    //     this.height = height;
    //     this.weight = weight;
    // }
    constructor(height, weight) {
        super("Triangle");
        this.height = height;
        this.weight = weight;
    }
    set Height(height) {
        this.height = height;
    }
    get Height() {
        return this.height;
    }
    set Weight(weight) {
        this.weight = weight;
    }
    get Weight() {
        return this.weight;
    }
    getInfo() {
        return super.Name + " " + this.height + " " + this.weight;
    }
}
class Cicle extends Shape {
    constructor(nk) {
        super("Circle");
        this.nk = nk;
    }
    set Nk(nk) {
        this.nk = nk;
    }
    get Nk() {
        return this.nk;
    }
    getCircleInfo() {
        return super.Name + "   " + this.Nk;
    }
}
var tarn = new Triangle(12, 20);
console.log(tarn.getInfo());
/// typeScrit have Private And public And Protected As Access Modifier  And static 
