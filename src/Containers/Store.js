import React, {useState} from 'react'

export const CurrentUserContext = React.createContext('')
export const OutfitsContext = React.createContext('')
export const MyFaveTopsContext = React.createContext('')
export const MyFaveBottomsContext = React.createContext('')
export const MyFaveShoesContext = React.createContext('')

const Store = ({children}) => {
    const [currentUser, setCurrentUser] = useState(1)
    const [outfits, setOutfits] = useState('')
    const [myFaveTops, setMyFaveTops] = useState('')
    const [myFaveBottoms, setMyFaveBottoms] = useState('')
    const [myFaveShoes, setMyFaveShoes] = useState('')

    return (
        <div>
            <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
            <OutfitsContext.Provider value={[outfits, setOutfits]}>
            <MyFaveTopsContext.Provider value={[myFaveTops, setMyFaveTops]}>
            <MyFaveBottomsContext.Provider value={[myFaveBottoms, setMyFaveBottoms]}>
            <MyFaveShoesContext.Provider value={[myFaveShoes, setMyFaveShoes]}>
                {children}
            </MyFaveShoesContext.Provider>
            </MyFaveBottomsContext.Provider>
            </MyFaveTopsContext.Provider>
            </OutfitsContext.Provider>
            </CurrentUserContext.Provider>
        </div>
    )
}

export default Store