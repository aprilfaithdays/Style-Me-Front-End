import React, {useState} from 'react'

export const CurrentUserContext = React.createContext('')
export const OutfitsContext = React.createContext('')
export const MyFaveTopContext = React.createContext('')

const Store = ({children}) => {
    const [currentUser, setCurrentUser] = useState(2)
    const [outfits, setOutfits] = useState('')
    const [myFaveTops, setMyFaveTops] = useState('')

    return (
        <div>
            <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
            <OutfitsContext.Provider value={[outfits, setOutfits]}>
            <MyFaveTopContext.Provider value={[myFaveTops, setMyFaveTops]}>
                {children}
            </MyFaveTopContext.Provider>
            </OutfitsContext.Provider>
            </CurrentUserContext.Provider>
        </div>
    )
}

export default Store