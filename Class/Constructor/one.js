class Account{
    constructor(){
        console.log("Constructor class")
    }
    acc_Bal=0;
    
    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount
    }
    withdrawal_Amount(amount) {
        this.acc_Bal = this.acc_Bal - amount 
    }
}
let a1=new Account();
console.log(a1);
deposit_Amount(500)
console.log(a1.acc_Bal)
withdrawal_Amount(200)
console.log(a1.acc_Bal)

