import React, { useState, useEffect } from 'react';

export const CurrentUserContext = React.createContext('');

const CurrentUser = ({children}) => {
    const abortController = new AbortController();
    const [currentUser, setCurrentUser] = useState({});
    
    const userId = () => localStorage.id ? parseInt(localStorage.id, 0) : '';

    const cleanUp = () => abortController.abort();

    useEffect(() => {
        localStorage.id && getUser();
        return cleanUp();
        // eslint-disable-next-line 
    },[])

    const getUser = () => {
        const id = userId();
        fetch(`http://localhost:3000/users/${id}`)
        .then(res => res.json())
        .then(res => setCurrentUser(res));
        return cleanUp();
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