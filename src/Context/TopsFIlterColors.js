import React, { useState } from 'react';

export const ColorFilters = React.createContext([]);

const TopsFilterColors = ({children}) => {
    const [topColors, setTopColors] = useState([]);
    


    return (
        <div>
            <ColorFilters.Provider value={[topColors, setTopColors]}>
                {children}
            </ColorFilters.Provider>
        </div>
    )
}

export default TopsFilterColors