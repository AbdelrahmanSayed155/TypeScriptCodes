
module AsynchronousTS{

function longProcess(cd){
    var result=1;
    for(var i=0;i<100000000;i++){
        result +=i;
    }
    cd(result);
    return result
}

function main(){

    let result =  longProcess( function callback(result){
      console.log("the result is " + result);
    });
    console.log("I am Here");
}

main();

for(var y=0;y<6;y++){
console.log("go number:"+y)
}

}