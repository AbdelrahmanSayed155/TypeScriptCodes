var operation;
(function (operation) {
    operation[operation["Add"] = 1] = "Add";
    operation[operation["Sub"] = 2] = "Sub";
    operation[operation["Mul"] = 3] = "Mul";
    operation[operation["Div"] = 4] = "Div";
})(operation || (operation = {}));
var x = 10;
var y = 20;
var choose = 1;
if (choose == operation.Add) {
    console.log("Reslut" + (x + y));
}
else if (choose == operation.Sub) {
    console.log("Reslut" + (x - y));
}
else if (choose == operation.Mul) {
    console.log("Reslut" + (x * y));
}
else if (choose == operation.Div) {
    console.log("Reslut" + (x / y));
}
else {
    console.log("Unkown Input Parameters ");
}
