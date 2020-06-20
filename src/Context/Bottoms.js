import React,  { useState, useEffect } from 'react';

export const BottomsContext = React.createContext('');

const Bottoms = ({children}) => {
    const abortController = new AbortController()
    const [bottoms, setBottoms] = useState([]);

    useEffect(() => {
        getBottoms();
        // eslint-disable-next-line 
    },[])

    const getBottoms = async () => {
        await fetch('http://localhost:3000/bottoms')
        .then(res => res.json())
        .then(res => setBottoms(res))
    }

    const cleanUp = () => abortController.abort()

    return (
        <div>
            <BottomsContext.Provider value={[bottoms, setBottoms]}>
                {children}
            </BottomsContext.Provider>
            {cleanUp()}
        </div>
    )
}

export default Bottoms