import React, { useContext } from 'react';
import ProductList from '../Components/ProductList';
import { FaveTopsContext } from '../Context/FaveTops';
import { TopsContext } from '../Context/Tops';
import { CurrentUserContext } from '../Context/CurrentUser';
import '../Styling/ProductList.css'
import FilterOptionsForm from '../Components/FilterOptionsForm';
import { useState } from 'react';
import Form from 'react-bootstrap/Form'



const TopsContainer = () => {
    const faveTospUrl = 'http://localhost:3000/favorite_tops';
    const [currentUser] = useContext(CurrentUserContext);
    const [faveTops, setFaveTops] = useContext(FaveTopsContext);
    const [tops] = useContext(TopsContext);
    const [filterColor, setFilterColor] = useState('')

    const filterMyFaveTops = () => {
        const list = [...faveTops];
        return list.filter(fave => fave.user_id === currentUser.id);
    }

    const faveTopsId = () => {
        const myList = filterMyFaveTops();
        return myList.map(fave => fave.top_id);
    }

    const addFavorite = e => {
        const id = parseInt(e.target.value, 0);
        fetch(faveTospUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                user_id: currentUser.id,
                top_id: id
            })
        })
        .then(res => res.json())
        .then(res => setFaveTops([...faveTops, res]))
    }

    const removeFavorite = e =>{
        const id = parseInt(e.target.value, 0);
        const myList = filterMyFaveTops();
        const fave = myList.find(fave => (fave.user_id === currentUser.id && fave.top_id === id));

        fetch(`${faveTospUrl}/${fave.id}`, {
            method: 'DELETE'
        })
        removedFave(fave.id);
    }

    const removedFave = id => {
        const faveTopsList = [...faveTops];
        const updated = faveTopsList.filter(fave => fave.id !== id );
        setFaveTops(updated);
    }

    const renderTops = () => {
        const list = filteredTops();
        list.sort((a, b) => b.id - a.id);
        const faveTopsIdList = faveTopsId();
        return list.map(top => {
            return <ProductList 
                key={top.id} 
                product={top} 
                favorite={faveTopsIdList.includes(top.id) ? true: false}
                addFavorite={addFavorite} 
                removeFavorite={removeFavorite}
            />
        });
    }

    const colorsObject = () => {
        const list = [...tops];
        let options = {};
        for(let i = 0; i < list.length; i++){
            let top = (list[i].color).split(" ")
            for(let j = 0; j < top.length; j++){
                let color = top[j]
                if(options[color]) {
                    options[color]++
                } else {
                    options[color] = 1
                }
            }
        }
        return options
    }
    
    const colorsOptions = () => {
        const colors = colorsObject();
        let list = [];

        for(const [color, amount] of Object.entries(colors)){
            list.push({color, amount})
        }

        return list;
    }

    const renderOptions = () => {
        const list = colorsOptions()
        return list.map((option, index) => {
            return(
                <div key={index}>
                    <FilterOptionsForm 
                        color={option.color} 
                        amount={option.amount}
                        checkFilter={checkFilter}
                    />
                </div>
            )
        })
    }

    const checkFilter = e => {
        let update 
        if(filterColor.includes(e)){
            update = filterColor.filter(color => color !== e)
        } else {
            update = [...filterColor, e]
        }
        setFilterColor(update)
    }    
    
    const filterTops = () => {

        return(
            <div>
                options
                <Form>
                    <div className="mb-3">
                        <Form.Check 
                            type='checkbox'
                            // id={}
                            label="Clear Filter"
                            onChange={() => setFilterColor('')}
                        />
                    </div>
                </Form>
                {renderOptions()}
            </div>
        )
    }
    
    const filteredTops = () => {
        const list = [...tops];
        let colors = [...filterColor]
        let updated = []

        if(filterColor !== ''){
            for(let c of colors){
                list.map(top => {
                    if(top.color.includes(c)){
                        if(!updated.includes(top)){
                            updated.push(top)
                        }
                    }
                })
                // updated = list.filter(top => top.color.includes(colors))
            }
        } else {
            updated = list
        }
        return updated
    }
    
    return(
        <div>
        {/* {console.log(filterColor)} */}
            <div className="header-section">
                <div className="title">
                    <h3>Tops</h3>
                </div>
                <div className="filter-products">
                    {filterTops()}
                </div>
            </div>
            <div className="product-list">
                {renderTops()}
            </div>
        </div>
    )
}

export default TopsContainer

    // const seasonObject = () => {
    //     const list = [...tops];
    //     let options = {};
    //     for(let i = 0; i < list.length; i++){
    //         let top = (list[i].seasons).split(" ")
    //         for(let j = 0; j < top.length; j++){
    //             let seasons = top[j]
    //             if(options[seasons]) {
    //                 options[seasons]++
    //             } else {
    //                 options[seasons] = 1
    //             }
    //         }
    //     }
    //     return options
    // }

    // const sleeveObject = () => {
    //     const list = [...tops];
    //     let options = {};
    //     for(let i = 0; i < list.length; i++){
    //         let top = (list[i].sleeve_length).split(" ")
    //         for(let j = 0; j < top.length; j++){
    //             let sleeve_length = top[j]
    //             if(options[sleeve_length]) {
    //                 options[sleeve_length]++
    //             } else {
    //                 options[sleeve_length] = 1
    //             }
    //         }
    //     }
    //     return options
    // }

    // const seasons = seasonObject()
    // const sleeves = sleeveObject()