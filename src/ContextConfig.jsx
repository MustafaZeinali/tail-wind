import { createContext, useState } from "react";

export const ContextTail = createContext();

const ContextRoot = ({children})=>{

    const [isLogined, setIsLogined] = useState(false)
    const [productData , setProductData] = useState([]);
    const [open , setOpen] = useState(false)

    return(
        <ContextTail.Provider value={{isLogined,setIsLogined,productData,setProductData,open,setOpen}}>
            {children}
        </ContextTail.Provider>
    )
}
export default ContextRoot