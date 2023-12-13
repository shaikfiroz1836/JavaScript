class Inheri{
    acc_Id;
    acc_Name;
    constructor(id,name){
        this.acc_Id=id;
        this.acc_Name=name;
    }
}
class Don extends Inheri{
    acc_Dept;
    acc_Sal=0;
    constructor(id,name,dept,sal){
        super(id,name);
        this.acc_Dept=dept;
        this.acc_Sal=sal;
    }
    
}
a=new Don(1,"Firoz","Devlop","60000");
console.log(a)