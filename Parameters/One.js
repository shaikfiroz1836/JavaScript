class One{
    acc_Id;
    acc_Name;
    acc_Bal=0;

    open_Account(){}
    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount
    }
    withdrawl(){}
    get_Bal(){
        return this.acc_Bal
    }
}
let a1 = new One();
console.log(a1)
a1.open_Account();
a1.deposit_Amount(500000)
a1.withdrawl()
a1.get_Bal()
console.log(a1.get_Bal())