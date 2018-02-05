var arrowFunctions;
(function (arrowFunctions) {
    // function paly(){
    //     return "Playing ";
    // }
    //        param    return type
    // let play:(      )=>void;
    // let play:(name:string)=>void;
    let play = (name) => {
        alert("Declarting " + name);
    };
    // calling it 
    play("Abdo");
    function Fruit() {
        this.fruit = "Orange";
        this.getFruit = () => {
            return this.fruit;
        };
    }
    let fru = new Fruit();
    alert(fru.getFruit());
    function printRestParam(...param) {
        param.forEach((value) => console.log(value));
    }
    let printRestParam2 = (...param) => {
        param.forEach((value) => console.log(value));
    };
})(arrowFunctions || (arrowFunctions = {}));
