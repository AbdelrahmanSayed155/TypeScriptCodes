6;
function sum(...values) {
    var sum = 0;
    for (var n of values) {
        sum += n;
    }
    return sum;
}
function sum2(op, ...values) {
    var sum = 0;
    for (var n of values) {
        sum += n;
    }
    return sum;
}
var r = sum(10, 20, 30, 40);
// var r =sum(10,20,30,40,"sdcdcd");
console.log("the result is " + r);
// var btv = document.getElementById("idOfElement");
// btv.addEventListener("click",()=>{
// });
// this code will run in js but in ts msg must be global value 
//global value
// var age =25;
// function print(){
//     // local value 
//     var msg ="i am developer ";
// }
// console.log(msg);
//global value
var age = 25;
function print() {
    // local value 
    let msg = "i am developer ";
    console.log(msg);
}
//// elements 
var element = { 'id': 10,
    "name": "Banana",
    'cost': '10',
    'country': 'lenban'
};
var elId = element.id;
var elName = element.name;
var elCost = element.cost;
console.log(elId);
var { id, cost } = element;
//// swap 
var a = 5;
var b = 10;
[a, b] = [b, a];
/// array elemets
var arr = ["abdelrahman", 16];
var [name1, age1] = arr;
// array with specific param
function printg({ name, age }) {
    console.log('name :${name} , age :${age}');
}
var arrr = {
    "name": "abdelrahman'sayed",
    "age": 15
};
printg(arrr);
/// String Concatunaion 
var userInfo = "";
var jobs = ["Admin", "developer", "DevOpps"];
console.log("Available jobs ");
for (var j in jobs) {
    console.log("job:" + jobs[j]);
}
console.log("using ES6 Egma Script 6 ");
var works = ["Admin", "developer", "DevOpps"];
console.log("Available jobs ");
for (var work of works) {
    console.log("work:" + work);
}
console.log("using ES6 Egma  good implements");
let careers = ["Admin", "developer", "DevOpps"];
console.log("Available jobs ");
for (let work of careers) {
    console.log('my work ${work} ');
}
