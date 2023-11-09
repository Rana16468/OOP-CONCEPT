{
    // problem 4
    enum perfectSize{
        //small," "medium," or "large."
        Small='samll',
        Medium='medium',
        Large='large'

    }

    const handelSizeEnum=(size:perfectSize)=>{

        console.log(size);

        
    }

    handelSizeEnum(perfectSize.Small); // OK
    handelSizeEnum(perfectSize.Medium); // OK

    handelSizeEnum(perfectSize.Large); // OK

   

}