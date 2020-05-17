import React, {useState} from 'react'

export const CurrentUserContext = React.createContext('')
export const OutfitsContext = React.createContext('')

const Store = ({children}) => {
    const [currentUser, setCurrentUser] = useState(1)
    const [outfits, setOutfits] = useState('')

    return (
        <div>
            <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
            <OutfitsContext.Provider value={[outfits, setOutfits]}>
                {children}
            </OutfitsContext.Provider>
            </CurrentUserContext.Provider>
        </div>
    )
}

export default Store