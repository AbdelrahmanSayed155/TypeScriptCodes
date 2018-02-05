//namespace School.Archi{
export class Person{
    name:string;
    age:number;
    address:string;
    email:string;
    constructor(name:string,age:number){
        this.name = name;
        this.age= age;
    }

    set Name(name:string){
        this.name = name;
    }
    get Name(){
       return  this.name ;
    }

    set Age(age:number){
        this.age = age;
    }
    get Age(){
       return  this.age ;
    }
    set Address(address:string){
        this.address = address;
    }
    get Address(){
       return  this.address ;
    }
    set Email(email:string){
        this.email = email;
    }
    get Email(){
       return  this.email ;
    }
    

}

export class  Student extends Person {
 yearNumber:number;
 className:string;
 constructor(name:string,age:number,yearNumber:number,className:string){
super(name,age);
this.yearNumber =yearNumber;
this.className =className;
 }

 print(){
     console.log("name"+this.Name+"age"+this.Age);  
 }

}

export class  Teacher extends Person {
    numberExperince:number;
constructor(name:string,age:number,numberExperince:number){
   super(name,age);
   this.numberExperince =numberExperince;
    }

    print(){
        console.log("name"+this.Name+"age"+this.Age);   
    }
    
   }
//}