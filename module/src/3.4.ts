{
    //3-4: Type guard using instance of
    class Animal{
        name:string;
        species:string;
        constructor(name:string,species:string)
        {
            this.name=name;
            this.species=species;
        }
        makeSount(){
            console.log('I am making sound');
        }
    }

    class Dog extends Animal
    {
        constructor(name:string,species:string)
        {
            super(name,species);
        }
        makeBark()
        {
            console.log('I am Making Bark Sound');
        }
    }

    class Cat extends Animal
    {
        constructor(name:string,species:string)
        {
            super(name,species);
        }
        makeCat()
        {
            console.log('I am Making Cat Sound');
        }
    }

    const isDog=(animal:Animal) : animal is Dog=>{
        return animal instanceof Dog;
    }
    const isCat=(animal:Animal): animal is Cat=>{
        return animal instanceof Cat;
    }

    /*const getInstances=(animal:Animal)=>{
        

        if(animal instanceof Dog)
        {
            animal.makeBark();
        }
        else if(animal instanceof Cat)
        {
            animal.makeCat();
        }
        else{
          animal.makeSount();
        }


    }*/

    const getInstances=(animal:Animal)=>{
        

        if(isDog(animal))
        {
            animal.makeBark();
        }
        else if(isCat(animal))
        {
            animal.makeCat();
        }
        else{
          animal.makeSount();
        }


    }

    const dog=new Dog('german shapper','dog');
    const cat=new Cat('sweet cat','cat');
    getInstances(dog);
    getInstances(cat);
}