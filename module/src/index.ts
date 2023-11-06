{
    // inheritance

    class Animal {
        // public name:string;
        // public  species:string;
        // public sound:string;

        constructor(public name:string,public species:string, public sound:string)
        {
            // this.name=name;
            // this.species=species;
            // this.sound=sound;
        }
        makeSount()
        {
            console.log(`the ${this.name} says ${this.sound} but it is ${this.species}`);
        }
    }

    const dog=new Animal('german shepar','dog','Ghew');
    dog.makeSount();
    const cat=new Animal('switch shaper','cat','meaw meaw');
    cat.makeSount();
    

}