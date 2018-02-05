var AsTSTS;
(function (AsTSTS) {
    //// this function is Asynchrounus 
    function longProcess() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var result = 1;
                for (var i = 0; i < 2000000000; i++) {
                    result += i;
                }
                resolve(result);
            }, 0);
        });
    }
    function main() {
        let result = longProcess()
            .then((res) => console.log("the result is " + res))
            .catch((error) => console.log("Exception is " + error));
        console.log("I am Here");
    }
    main();
    for (var y = 0; y < 6; y++) {
        console.log("go number:" + y);
    }
})(AsTSTS || (AsTSTS = {}));
