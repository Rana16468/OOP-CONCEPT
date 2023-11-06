{
    //Constraint Key

    interface Teacher{
        name:'string';
        id:number;
        email:string;
        phoneNumber:string;
        address:{
            parAddress:string;
            presentAddress:string;
        }
    }

    //obj[key]

  const getCreateObj=<X,Y extends keyof X>(obj:X,key:Y)=>{

    return obj[key]

  }

  const teacher={
    name:'Ali Mohammad',
    id:12258,
    email:'amsr215019@gmail.com',
    phoneNumber:'01722305054',
    address:{
        parAddress:'Dhaka',
            presentAddress:'Bangladesh'
    }
  }
  

  console.log(getCreateObj(teacher,'address'));

}