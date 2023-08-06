import React, { FC, createContext, useState } from "react";
import { GlobalContextType } from "../../Types/types";

export const GlobalContext = createContext<GlobalContextType>({
    login: false, 
    setLogin: (arg: boolean)=>{return arg}
})


export const GlobalContextProvider: FC<{children: React.ReactNode}>  = ({children})=>{
    const [login,setLogin] = useState(false)
    return <GlobalContext.Provider 
        value={{
                login, setLogin
             }}>
                {children}
            </GlobalContext.Provider>;
}


