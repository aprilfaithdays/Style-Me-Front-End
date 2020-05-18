import React, {useState} from 'react'

export const CurrentUserContext = React.createContext('')
export const OutfitsContext = React.createContext('')
export const FaveTopsContext = React.createContext('')
export const FaveBottomsContext = React.createContext('')
export const FaveShoesContext = React.createContext('')

const Store = ({children}) => {
    const [currentUser, setCurrentUser] = useState(2)
    const [outfits, setOutfits] = useState('')
    const [faveTops, setFaveTops] = useState('')
    const [faveBottoms, setFaveBottoms] = useState('')
    const [faveShoes, setFaveShoes] = useState('')

    return (
        <div>
            <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
            <OutfitsContext.Provider value={[outfits, setOutfits]}>
            <FaveTopsContext.Provider value={[faveTops, setFaveTops]}>
            <FaveBottomsContext.Provider value={[faveBottoms, setFaveBottoms]}>
            <FaveShoesContext.Provider value={[faveShoes, setFaveShoes]}>
                {children}
            </FaveShoesContext.Provider>
            </FaveBottomsContext.Provider>
            </FaveTopsContext.Provider>
            </OutfitsContext.Provider>
            </CurrentUserContext.Provider>
        </div>
    )
}

export default Store