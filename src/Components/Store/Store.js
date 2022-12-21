import { useState, createContext } from "react";
export const StoreContext = createContext()

export default function ProviderStore(props){
    const StoreProvider = createContext();
    const [favArray, setFavArray] = useState([])

    return(
        <StoreContext.Provider value={{favArray: favArray, setFavArray:setFavArray} }>
        {props.children}
        </StoreContext.Provider>
    )
}
