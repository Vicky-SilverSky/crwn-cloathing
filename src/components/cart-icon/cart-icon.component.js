import React from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartDropDown } from '../../redux/cart/cart.action'
import { cartItemsCount } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({ toggleCartDropdown, totalCartItems }) => (
    <div className='cart-icon' onClick={toggleCartDropdown}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{totalCartItems}</span>
    </div>
)

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     totalCartItems: cartItems.reduce((prevVal, currVal) => prevVal + currVal?.quantity, 0)
// })

const mapStateToProps = createStructuredSelector({
    totalCartItems: cartItemsCount // cartItems.reduce((prevVal, currVal) => prevVal + currVal?.quantity, 0)
})

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropDown())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)

