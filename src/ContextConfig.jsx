import { createContext, useState } from "react";

export const ContextTail = createContext();

const ContextRoot = ({children})=>{

    const [isLogined, setIsLogined] = useState(false)
    const [productData , setProductData] = useState([]);
    const [open , setOpen] = useState(false)
    const [collectedDays, setCollectedDays] = useState([]);
    const [totalDays , setTotalDays] = useState([]);
    return(
        <ContextTail.Provider value={{isLogined,setIsLogined,productData,setProductData,open,setOpen,collectedDays,setCollectedDays,totalDays,setTotalDays}}>
            {children}
        </ContextTail.Provider>
    )
}
export default ContextRoot