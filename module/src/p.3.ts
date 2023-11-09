{

    // problem solving three

    //step 1
    type userProfileType={
        name:string;
        address:{
            street:string;
            city:string;
            postcode?:number; //optional property
        };
        email:string;
    };
    //step 2
    type PartialUserProfile={

        name:string;
        address:{
            street:string;
            city:string;
            postcode?:number; //optional property
        };
        email:string;

    }

    // step 3

    const updateUserProfileInformation=(userProfile:userProfileType,partialUserProfile:PartialUserProfile):object=>{
        const result={
            ...userProfile,
            ...partialUserProfile
        };
        return result;
    };
    const userProfileInfo={
        name: 'Ali Mohammad',
        address: {
          street: '278/2 Sonkor',
          city: 'Dahaka',
          postalCode: '12345',
        },
        email: 'mohammad@gmail.com',
    }
    const partialProfileInfo={
        name: 'Sohel Rana',
        address: {
          street: '1273/1 Santinagor',
          city: 'Thakurgoan',
          postalCode: '8080',
        },
        email: 'amsr215019@gmail,com',
    }
    //step -4
  const result=  updateUserProfileInformation(userProfileInfo,partialProfileInfo) as object;

console.log(result);



// sprate operator in not working duplicate index or object index type  that means that is flowing the intersaction role in mathmatical set 
// const initial:any={name:'Sohel'};
// const update:any={name:'Ali'};
// console.log({...initial,...update});

}