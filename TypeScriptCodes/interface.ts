interface op{
    add(obj:any):ResultOfOp;
    update(obj:any):ResultOfOp;
    delete(obj:any):ResultOfOp;
}


interface ResultOfOp{
    status:boolean;
    message:string;
}


class Employee implements op{

    
    add(obj:any):ResultOfOp{
 
        var re:ResultOfOp;
         return re;
    }
    update(obj:any):ResultOfOp{
        var re:ResultOfOp;
        return re;
    }
    delete(obj:any):ResultOfOp{
        var re:ResultOfOp;
        return re;
    }

}

