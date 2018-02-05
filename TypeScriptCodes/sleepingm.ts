module impSleeping{

let sleep=(myTime:number)=>{
   new Promise(resolve=>{
       setTimeout(()=>{
           resolve("Sleeping Done ");
         },myTime)});
    }

    let main= async()=>{
        let arr =[10,12,15,10,18];
        sleep(500);

        for(var r of arr ){
            console.log(r);
            
        }
    }

}