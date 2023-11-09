{
    // problem solving 2
    const keyValueArray:[string,any][]=[
        ['id',23],
        ['name','sohel'],
        ['isRegister',true],

        ['Register','string']
    ]

    const arrayGeneric=<T extends string,U>(array:[T,U][])=>{

        return array.reduce((finalObj,[key,val])=>{
            finalObj[key]=val;
            return finalObj
        },{} as Record<T,U>)

    }

    console.log(arrayGeneric(keyValueArray));
}