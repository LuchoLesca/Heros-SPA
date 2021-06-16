import React, { useState } from "react"

const SearchContext = React.createContext({})

export function SearchContextProvider ({ children }) {
    const [name, setName] = useState("")
     
    return <SearchContext.Provider value={{name, setName}}>
            {children}
        </SearchContext.Provider>
}

export default SearchContext;
