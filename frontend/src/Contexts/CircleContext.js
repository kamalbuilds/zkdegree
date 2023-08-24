import { createContext, useState } from "react";


export const CircleContext = createContext({})

const CircleContextProvider = (props) => {

    const [CheckoutData, setCheckoutData] = useState();

    console.log("checkout data in context", CheckoutData)

    return (
        <CircleContext.Provider value={{
            setCheckoutData,
            CheckoutData
        }}>
            {props.children}
        </CircleContext.Provider>
    )
}

export default CircleContextProvider;

