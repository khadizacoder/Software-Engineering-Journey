"use strict";
console.log("hello");
class Account {
    id; // khokon o change korte parbo na
    owner;
    _balance; // change korte parbo but bayre thake access korte parbo na
    nominee;
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposite(amount) {
        if (amount < 0)
            throw new Error("Invalid balance");
        this._balance += amount;
    }
    // get_balance(){
    //     return this._balance
    // }
    verifyAccount() {
    }
    calculateFee() {
    }
    get get_balance() {
        this.verifyAccount();
        return this._balance;
    }
}
const khadiza = new Account(3, "Khadiza", 0);
// console.log(khadiza.get_balance())
console.log(khadiza.get_balance);
console.log(khadiza);
