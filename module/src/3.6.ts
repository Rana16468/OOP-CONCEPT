{
    //3-6: Getter and setter
    class BankAccount{

        public readonly Id:number;
       public name:string;
       private age:number;
       private balance:number;
        constructor(Id:number,name:string,age:number,balance:number)
        {
            this.name=name;
            this.age=age;
            this.balance=balance;
            this.Id=Id;
        }
        set deposit(amount:number)
        {
           this.balance=  this.balance + amount
        }

        get Balance()
        {
            return this.balance
        }
    }

    const account1=new  BankAccount(111,'Sohel Rana',24,1000);
    account1.deposit=1000;
    
    console.log(account1.Balance);

}