class One{
    acc_Bal=0;
    constructor(id,name){
        this.acc_Id = id
        this.acc_Name=name
    }
    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount
    }
    get_Bal(){
        return this.acc_Bal;
    }
}
let a1 = new One(101,"Firoz");
console.log(a1)
a1.deposit_Amount(50000)
a1.get_Bal()
console.log(a1.get_Bal())