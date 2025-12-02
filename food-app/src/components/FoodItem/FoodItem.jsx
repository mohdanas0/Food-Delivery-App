import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

import { StoreContext } from '../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {


    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)

    return (
        <div className='food-item'>
            <div className='food-item-image-container'>
                <img className='food-image' src={url + "/images/" + image}></img>
                {!cartItems[id]
                    ? <img className='add' src={assets.add_icon_white} onClick={() => addToCart(id)}></img>
                    : <div className='food-item-counter'>
                        <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)}></img>
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addToCart(id)}></img>
                    </div>
                }

            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p className="name">{name}</p>
                    <img className='rating' src={assets.rating_starts} alt=''></img>
                </div>
                <p className="description">{description}</p>
                <p className="price">${price}</p>
            </div>

        </div >
    )
}

export default FoodItem;