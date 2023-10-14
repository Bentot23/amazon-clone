import React from 'react'
import './styles/CheckoutProduct.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import { useStateValue } from './StateProvider';


const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket, user }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove the item from the basket
    //dispatch the item into the data layer
    dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id
    })   
  }
  return (
    <div className='checkoutProduct'>
        <img src={image} alt="" className="checkoutProduct_image" 
        />
        <div className="checkoutProduct_info">
            <p className='checkoutProduct_title'>{title}</p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p><StarRateIcon/></p> 
                ))
                } 
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>

        </div>
    </div>
  )
}

export default CheckoutProduct