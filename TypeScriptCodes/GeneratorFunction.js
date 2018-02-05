var FunctionsGenerator;
(function (FunctionsGenerator) {
    function getRandoumNumber() {
        var da = new Date();
        var ti = da.getTime();
        return ti * Math.random();
    }
    console.log(getRandoumNumber());
    ///// generator function is function generate values so using generator function by itrator 
    //// and uding easy way to get next value 
    function* getRandoumNumber2() {
        var da = new Date();
        var ti = da.getTime();
        while (true) {
            var message = yield ti * Math.random();
            console.log(message);
        }
    }
    var me = getRandoumNumber2();
    console.log(me.next());
    console.log(me.next());
    console.log(me.next());
    function* getRandoumNumber3() {
        try {
            var message = yield ('yeiding');
        }
        catch (errorr) {
            console.log("excption is " + errorr);
        }
        console.log(message);
    }
    var me2 = getRandoumNumber3();
    console.log(me2.next());
    console.log(me2.next());
    console.log(me2.next());
})(FunctionsGenerator || (FunctionsGenerator = {}));
