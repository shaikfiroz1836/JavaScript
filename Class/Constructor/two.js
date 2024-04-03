class Account{
    acc_id;
    acc_name;
    acc_bal;
    constructor(Id, name, balance){
        this.acc_id=Id;
        this.acc_name = name;
        this.acc_bal = balance;
    }
}

let a1=new Account(1,"siva",5000)
console.log(a1)