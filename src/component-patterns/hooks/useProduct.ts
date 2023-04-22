import { useState } from "react";

export const useProduct = () =>{

    const [counter, setCounter] = useState(0)

    const increaseBy = ( value: number ) => { 
        setCounter( prev => Math.max( prev + value, 0 ))
    }

    return {            // aqui puede ser tambien con [] dependiendo si el orden importa
        counter,
        increaseBy
    }
}
