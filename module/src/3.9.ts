{
    // abstraction 
    //interface and abstract class 

    interface Vehicle
    {
        startEngine():void;
        stopEngine():void;
        move():void;
    }
    class Car implements Vehicle
    {
        startEngine(): void {

            console.log('I am stating the car');
            
        }
        stopEngine(): void {
            console.log('I am ending  the car');
        }
        move(): void {
            console.log('I am moving the car');
        }
        test()
        {
            console.log('here is my test function');
        }
    }

    const toyotaCar=new Car();
    toyotaCar.startEngine();
    toyotaCar.stopEngine();
    toyotaCar.move();
    toyotaCar.test();

    // abstrac class

   abstract class Vehicle2
    {
        abstract startEngine():void;
       abstract  stopEngine():void;
       abstract  move():void;

    }

    class Honda extends Vehicle2{
        startEngine(): void {

            console.log('I am stating the car');
            
        }
        stopEngine(): void {
            console.log('I am ending  the car');
        }
        move(): void {
            console.log('I am moving the car');
        }
    }
 // bastrac calsss 
    const honda=new Honda();
   honda.startEngine();
   honda.stopEngine();
   honda.move();

}