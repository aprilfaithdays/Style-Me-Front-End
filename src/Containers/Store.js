import React, {useState} from 'react'

export const CurrentUserContext = React.createContext('')
export const OutfitsContext = React.createContext('')
export const FaveTopsContext = React.createContext('')
export const FaveBottomsContext = React.createContext('')
export const FaveShoesContext = React.createContext('')
export const NewNameContext = React.createContext('')
export const NewTopContext = React.createContext('')
export const NewBottomContext = React.createContext('')
export const NewShoeContext = React.createContext('')
export const TabKeyContext = React.createContext('')

const Store = ({children}) => {
    const [currentUser, setCurrentUser] = useState(2)
    const [outfits, setOutfits] = useState('')
    const [faveTops, setFaveTops] = useState('')
    const [faveBottoms, setFaveBottoms] = useState('')
    const [faveShoes, setFaveShoes] = useState('')
    const [newName, setNewName] = useState('')
    const [newTop, setNewTop] = useState('')
    const [newBottom, setNewBottom] = useState('')
    const [newShoe, setNewShoe] = useState('')
    const [key, setKey] = useState('tops')


    return (
        <div>
            <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
            <OutfitsContext.Provider value={[outfits, setOutfits]}>
            <FaveTopsContext.Provider value={[faveTops, setFaveTops]}>
            <FaveBottomsContext.Provider value={[faveBottoms, setFaveBottoms]}>
            <FaveShoesContext.Provider value={[faveShoes, setFaveShoes]}>
            <NewNameContext.Provider value={[newName, setNewName]}>
            <NewTopContext.Provider value={[newTop, setNewTop]}>
            <NewBottomContext.Provider value={[newBottom, setNewBottom]}>
            <NewShoeContext.Provider value={[newShoe, setNewShoe]}>
            <TabKeyContext.Provider value={[key, setKey]}>
                {children}
            </TabKeyContext.Provider>
            </NewShoeContext.Provider>
            </NewBottomContext.Provider>
            </NewTopContext.Provider>
            </NewNameContext.Provider>
            </FaveShoesContext.Provider>
            </FaveBottomsContext.Provider>
            </FaveTopsContext.Provider>
            </OutfitsContext.Provider>
            </CurrentUserContext.Provider>
        </div>
    )
}

export default Store