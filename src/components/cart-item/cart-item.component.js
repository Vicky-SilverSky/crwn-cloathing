import React from 'react'
import './cart-item.styles.scss'

const CartItem = ({ imageUrl, name, quantity, price }) => (
    <div className='cart-item'>
        <img
            src={imageUrl}
            alt='item'
        />
        <div className='item-details'>
            <div className='name'>{name}</div>
            <span>{quantity} x ${price}</span>
        </div>
    </div>
)

export default CartItem
