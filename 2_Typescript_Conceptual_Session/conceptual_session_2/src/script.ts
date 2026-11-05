console.log("hello")

class Account {
    readonly id: number;    // khokon o change korte parbo na
    owner: string;
    private _balance: number;   // change korte parbo but bayre thake access korte parbo na
    nominee ? : string

    constructor(id:number, owner:string, balance: number){
        this.id = id
        this.owner = owner
        this._balance = balance
    }

    deposite(amount:number){
        if (amount < 0)
            throw new Error("Invalid balance")
        this._balance += amount
    }

    // get_balance(){
    //     return this._balance
    // }

   

    private verifyAccount (){

    }

    private calculateFee() {

    }

    get get_balance(){
        this.verifyAccount() 
        return this._balance
    }
}

const khadiza = new Account(3, "Khadiza", 0)
// console.log(khadiza.get_balance())
console.log(khadiza.get_balance)

console.log(khadiza)
