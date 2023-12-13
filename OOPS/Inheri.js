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
    constructor(dept,sal){
        this.acc_Dept=dept;
        this.acc_Sal=sal;
    }
    super(){}
}
a=new Don();