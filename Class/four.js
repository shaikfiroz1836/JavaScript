class Account{
    acc_id=0;
    acc_Name="Firoz";
    acc_Bal=45000;
    
    deposit_Amount(){
        console.log("Amount Deposited Successfully")
    }
}
let a1=new Account();
let a2=new Account();
console.log(a1);

a1.deposit_Amount()
a2.deposit_Amount()

console.log(a1)
console.log(a2)
