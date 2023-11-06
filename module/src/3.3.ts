{
    //3-3: Type guard using typeof & in
    // type guard ---> typeof 

    type Aractnumric= string | number;
// type of opertaor type guard
    const add=(param1: Aractnumric, param2: Aractnumric):Aractnumric=>{

        if( typeof param1 ==='number' && typeof param2 ==='number')
        {
            return param1 + param2
        }
        else{
            return param1.toString() + param2.toString();
        }
    }

    console.log(add(2,3) as Aractnumric);
 // in guird

 interface normalUser{
    name:string;

 }
 type adminUser={
    name:string;
    role:'admin';
 }


 const getUser=( user:normalUser | adminUser)=>{

    if('role' in user)
    {
        console.log(`My Name is ${user.name} and role is ${user.role}`);
        
    }
    else{
        console.log(`My Name is ${user.name} and role is nothing}`);
    }
 }

 const NormalUser:normalUser={

    name:'sohel Rana'
 }
 const adMinUser:adminUser={
    name:'Ali Mohammad',
    role:'admin'
 }

 getUser(NormalUser);
 getUser(adMinUser);
    
}