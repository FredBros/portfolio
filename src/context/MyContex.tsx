import React, { createContext, useContext, useState, useEffect } from "react";
import {
  DataContextType,
} from "../types/data";

type Props = {
  children: React.ReactNode;
}

export const MyContext = createContext<DataContextType>({
    isMenuOpen: false,
    toggleMenu: () => null,

});

export const MyContextProvider= ({ children }:Props) => {
    const [isMenuOpen, setisMenuOpen] = useState(false)

    const toggleMenu = () => {
setisMenuOpen(()=>!isMenuOpen)
}


return (
    <MyContext.Provider value={{ isMenuOpen, toggleMenu }}>
    {children}
    </MyContext.Provider>
)
}

