{
    //pratces modules 
    //type alies
    type studentType={
        name:string;
        roll:number;
        devertment:string;
        semester:string;
        classCR:string;
        
    }

   


    const student1:studentType={
        name:'Sohel Rana',
        roll:123456,
        devertment:'CIS',
        semester:'Fall 2023',
        classCR:'CR'
        

    }

   
    type condition= keyof studentType
    
    const point:condition='devertment';
    console.log(student1[point]);

    console.log(student1);
    if('classCR' in student1)
    {
        console.log('Ali MOHAMMAD SOHEL RANA');
    }
    else{
        console.log('not exist');
    }

}

//