import React,  { useState, useEffect } from 'react';

export const LikedContext = React.createContext('');

const Liked = ({children}) => {
    const abortController = new AbortController()
    const [liked, setLiked] = useState([]);

    useEffect(() => {
        getLiked();
        // eslint-disable-next-line 
    },[])

    const getLiked = async () => {
        await fetch('http://localhost:3000/likes')
        .then(res => res.json())
        .then(res => setLiked(res))
    }

    const cleanUp = () => abortController.abort()

    return (
        <div>
            <LikedContext.Provider value={[liked, setLiked]}>
                {children}
            </LikedContext.Provider>
            {cleanUp()}
        </div>
    )
}

export default Liked