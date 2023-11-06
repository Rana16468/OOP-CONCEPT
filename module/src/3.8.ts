{
    //3-8 Polymorphism
    class Person
    {
        getSleep()
        {
            console.log('I am splemming 8 hours')
        }
    }

    class student extends Person
    {
        getSleep()
        {
            console.log('I am splemming 7 hours')
        }
    }
    class developer extends Person
    {
        getSleep()
        {
            console.log('I am splemming 6 hours')
        }

    }

    const getSleppingHours=(slpping:Person)=>{
        slpping.getSleep();

    }

    const person1=new Person();
    const person2=new student();
    const person3=new developer();
    getSleppingHours(person1);
    getSleppingHours(person2);
    getSleppingHours(person3);

    //ex -2 
    class Shape
    {
        getArea():number{
            return 0
        }
    }

    class Circle extends Shape{

        radious:number;
        constructor(radious:number)
        {
            super();
            this.radious=radious;
           
        }
        getArea(): number {
            return Math.PI *this.radious * this.radious;
        }
    }
    class Reactangle extends Shape{
        height:number;
        width:number;
        constructor(height:number,width:number)
        {
            super();
            this.height=height;
            this.width=width;
        }
        getArea(): number {
            return this.height *this.width
        }
    }

    const getAreaInstance=(instance:Shape)=>
    {
       const result= instance.getArea();
       console.log(result);
    }

    // instances
    const shape=new Shape();
    const circle=new Circle(10);
    const ractangle= new Reactangle(10,20);
    getAreaInstance(shape);
    getAreaInstance(circle);
    getAreaInstance(ractangle);

}

