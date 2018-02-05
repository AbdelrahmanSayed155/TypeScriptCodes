function todo(x) {
    console.log(x);
}
todo(45);
todo("Abdelrahman Sayed Mohamed");
todo({ name: "Abdekrahman", age: 26 });
class OP {
    add(x, y) {
        if ((typeof (x) == "number") && typeof (y) == "number") {
            console.log("The Result:" + (x + y));
        }
        else {
            console.log("The Result:" + x + " " + y);
        }
    }
}
var op = new OP();
op.add(10, 20);
