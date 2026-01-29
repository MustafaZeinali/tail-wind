import { createContext, useState } from "react";

export const ContextTail = createContext();

const ContextRoot = ({children})=>{

    const {isLogined, setIsLogined} = useState(false)

    return(
        <ContextTail.Provider value={{isLogined,setIsLogined}}>
            {children}
        </ContextTail.Provider>
    )
}
export default ContextRoot