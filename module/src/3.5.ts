{
    //3-5: Access modifiers


    class BankAccount{
        public readonly id:number;
        private name:string;
        private _balance:number;
        protected email:string;
        constructor(id:number,name:string,balance:number,email:string)
        {
            this.id=id;
            this.name=name;
            this._balance=balance;
            this.email=email;

        }

        addedBalance(amount:unknown)
        {
            if(typeof amount ==='number')
            {
                return this._balance + amount;
            }
            else{
                return 'provide Number Types Amount'
            }

        }
        getBalance()
        {
            return {
                userName:this.name,
                accountId:this.id,
                balance:this._balance
            }
        }
    }

    class studentAccount extends BankAccount
    {
        test()
        {
            // protected can be use noly extends happends 
        }
    }

    const account1=new BankAccount(111,'Sohel',1000,'amsr215019');
   console.log( account1.addedBalance(10));
   console.log( account1.getBalance());
}