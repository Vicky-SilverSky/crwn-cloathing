import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import { cartItemsSelector } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartDropDown } from '../../redux/cart/cart.action'

const CartDropDown = ({ cartItems, dispatch, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length
                ?
                    cartItems.map(cartItem => (
                        <CartItem
                            key={cartItem.id}
                            imageUrl={cartItem?.imageUrl}
                            name={cartItem?.name}
                            quantity={cartItem?.quantity}
                            price={cartItem?.price}
                        />
                    ))
                : <div className='empty-message'>
                    Your cart is empty
                </div>
            }
        </div>
        <CustomButton type="button" onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartDropDown())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector
})

export default withRouter(connect(mapStateToProps)(CartDropDown))
