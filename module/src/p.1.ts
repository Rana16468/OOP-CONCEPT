{
    // problem solving  1

    type Users={
        id:number;
        name:string;
    }
    const UserInfo:Array<Users>=[
        {id:1,name:'sohel'},
        {id:2,name:'Ali Mohammad'},
        {id:3,name:'Abdullah'}
    ]

    //T[K][]--->string[]
    //T[K]==string
    //T[k][]==string[]

    const getPropertFormArray=<T,K extends keyof T>(array:T[],key:K):T[K][]=>{

       return array.map((obj)=>obj[key])

    }
   console.log(getPropertFormArray(UserInfo,'id'))
}