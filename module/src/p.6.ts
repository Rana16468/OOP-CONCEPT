{
    //problem no 6

    const addNumber=(...numbe:number[]):number=>{

       return numbe.reduce((previous:number,instance:number)=>previous + instance,0);

    }

    console.log(addNumber(1,2,3,4,5,6,7,8,9,10) as number);

    //problem 7

    type multi=(value: string | number)=>void;

    const multiple=(value:number): number=>{

      return value

    }

    const commanFunction=(value:(string | number), callback:multi):void=>{

      if(typeof value ==='number'){
        const result:number=Math.pow(value,2);
         callback(result as number);
      }
      else{
        callback(value as string);
      }
    }

    commanFunction('100',(value)=>{
        console.log(value);
    })

    
   
    

   
}