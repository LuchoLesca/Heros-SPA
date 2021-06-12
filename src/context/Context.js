import React, { useState } from "react"

const Context = React.createContext({})

export function ContextProvider ({ children }) {
    const [name, setName] = useState("")
     
    return <Context.Provider value={{name, setName}}>
            {children}
        </Context.Provider>
}

export default Context;
