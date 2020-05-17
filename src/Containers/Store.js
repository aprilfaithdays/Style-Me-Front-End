import React, {useState} from 'react'

export const CurrentUserContext = React.createContext(1)

const Store = ({children}) => {
    const [currentUser, setCurrentUser] = useState(1)

    return (
        <>
            <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
                {children}
            </CurrentUserContext.Provider>
        </>
    )
}

export default Store