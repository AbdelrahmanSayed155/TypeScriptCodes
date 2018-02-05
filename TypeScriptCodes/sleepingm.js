var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var impSleeping;
(function (impSleeping) {
    let sleep = (myTime) => {
        new Promise(resolve => {
            setTimeout(() => {
                resolve("Sleeping Done ");
            }, myTime);
        });
    };
    let main = () => __awaiter(this, void 0, void 0, function* () {
        let arr = [10, 12, 15, 10, 18];
        sleep(500);
        for (var r of arr) {
            console.log(r);
        }
    });
})(impSleeping || (impSleeping = {}));
