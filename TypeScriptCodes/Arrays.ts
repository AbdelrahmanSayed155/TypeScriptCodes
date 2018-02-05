module example1{

    /// can using var or let for declare variable 
    let a:number[]=[12,14,54,78];
    let aa:[number]=[25,78,50];
    let aaa:Array<number>=[10,15,30,70];
/// itration 
for(let va of aaa){
    console.log(va);
}
/// itration 
aaa.forEach(function(value,index,array){
console.log(value,index,array);
});


}