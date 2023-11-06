{
    //3-2: Inheritance in OOP.

    class Parent
    {

        name:string;
        age:number;
        address:string;
        constructor(name:string,age:number,address:string){
            this.name=name;
            this.age=age;
            this.address=address;
        }

     studentDisplay(numofHous:number){
        console.log(`${this.name} will be sppleing ${numofHous} hours`);
     }

    }
    class Student extends Parent
    {
       
        constructor(name:string,age:number,address:string){
                    super(name,age,address);
           }

    
     
    }

    class Teacher extends Parent
    {
        
        degination:string;
        constructor(name:string,age:number,address:string,degination:string){
           super(name,age,address);
            this.degination=degination;
        }

   
     teacherDisplay(numofHous:number){
        console.log(`${this.name} will take ${numofHous} hours class`);
     }
    }

    const student1=new Student('sohel',25,'dhaka');
    student1.studentDisplay(7);
    const teacher1=new Teacher('aLI Mohammad',35,'thk','Computer');
    teacher1.teacherDisplay(1);
}