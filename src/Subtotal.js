import React from 'react'
import './styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket)
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) =>  (
                <>
                    <p>
                        Subtotal ({basket.length} items):
                        <strong>{`${value}`}</strong>
                    </p>
                    <small className='subtotal_gift'>
                        <input type='checkbox' /> 
                        This order contains gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
        />

        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal