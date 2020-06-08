import React, { useState, useEffect } from 'react'

export const CurrentUserContext = React.createContext('')

const CurrentUser = ({children}) => {
    const [currentUser, setCurrentUser] = useState({})
    
    const userId = () => localStorage.id ? parseInt(localStorage.id, 0) : ''

    useEffect(() => {
        localStorage.id && getUser()
        // eslint-disable-next-line 
    },[])

    const getUser = () => {
        const id = userId()
        fetch(`http://localhost:3000/users/${id}`)
        .then(res => res.json())
        .then(res => setCurrentUser(res))
    }

    return(
        <div>
            <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
                {children}
            </CurrentUserContext.Provider>
        </div>
    )
}

export default CurrentUser