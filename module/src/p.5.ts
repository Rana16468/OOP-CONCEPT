{
    //problem 5

    interface userInfo{
        name:string;
        NID:string;
        PhoneNumber:string;
        address:{
            presentAddress?:string;
            permanentAddress:string;

        };
        gender: 'male' | 'female';
        email:string;
        
    }
    type eductionInfo={
        primarySchoolName:string;
        secondarySchoolName:string;
        HigerSecondarySchoolName?:string;
        UniversityName?:string;
        result:{
            ssc:number;
            hsc?:number;
            cgpa?:number;
  
        }
    }

    const student1:userInfo={
        name:'Sohel Rana',
        NID:'12344567890hbdbsnn',
        PhoneNumber: '01628170792',
        address:{
            presentAddress:'Dhaka',
            permanentAddress:'Thakurgoan'

        },
        gender:'male',
        email:'amsr215019@gmail.com'
        
    }

   const resultInfo:eductionInfo={
    primarySchoolName:'AIA',
    secondarySchoolName:'AIA',
    HigerSecondarySchoolName:'MRGCP',
    UniversityName:'DIU',
    result:{
         ssc:4.60,
         hsc:3.50,
         cgpa:3.75
    }


   }

    const margeObject=<T extends {name:string;NID:string;PhoneNumber:string},Q>(obj1:T,obj2:Q):object=>{

       return {
        ...obj1,
        ...obj2
       }


    }

    console.log(margeObject(student1,resultInfo) as object);

}