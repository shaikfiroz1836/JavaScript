class Account{
    acc_id;
    acc_Name;
    acc_Bal;
    open_Account(){
        console.log("Account Opened Successfully")
    }
    deposit_Amount(){
        console.log("Amount Deposited Successfully")
    }
    withdrawl_Amount(){
        console.log("Withdrawl Amount Successfully")
    }
    get_Bal(){
        console.log("Balance Fetched Successfully")
    }
}

let a1=new Account();
console.log(a1);
a1.open_Account()