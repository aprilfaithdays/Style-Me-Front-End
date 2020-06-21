import React, { useState } from 'react';

export const MyTopsContext = React.createContext([]);

const Favorites = ({children}) => {
    const [myTops, setMyTops] = useState([])

    return (
        <div>
            <MyTopsContext.Provider value={[myTops, setMyTops]}>
                {children}
            </MyTopsContext.Provider>
        </div>
    )
}

export default Favorites