import { createContext, useState } from "react";

export const ContextTail = createContext();

const ContextRoot = ({children})=>{

    const {isLogined, setIsLogined} = useState(false)
    const {productData , setProductData} = useState([]);

    return(
        <ContextTail.Provider value={{isLogined,setIsLogined,productData,setProductData}}>
            {children}
        </ContextTail.Provider>
    )
}
export default ContextRoot