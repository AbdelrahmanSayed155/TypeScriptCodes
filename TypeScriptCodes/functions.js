var ep;
(function (ep) {
    console.log("Starting function in TS ");
    function info(name, age) {
        return 'user name:{' + name + "} age{" + age + "}";
    }
    console.log(info("Abdelrahman Sayed ", 12));
    var infoOf = info("Abdelrahman Sayed ", 12);
    function todo(x) {
        if (typeof (x) === "string") {
            console.log(" parameter is String it is " + x);
        }
        else if (typeof (x) === "number") {
            console.log(" parameter is number it is " + x);
        }
    }
    todo("Abdelrahman Sayed Mohamed");
    todo(12);
    function todoOverLoad(x, y) {
        if (typeof (x) === "string") {
            console.log(" parameter is String it is " + x);
        }
        else if (typeof (x) === "number") {
            console.log(" parameter is number it is " + x);
        }
    }
    ///function with defualt values 
    function play(name = "FootBall") {
        console.log(name);
    }
    function play2(name = ["FootBall", "BasketBall", "VollyBall"]) {
        name.forEach(value => console.log(value));
    }
})(ep || (ep = {}));
