import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButton from '../../components/stripe-button/stripe-button.component'
import { cartItemsSelector, cartTotalCount } from '../../redux/cart/cart.selector'
import './checkout.styles.scss'

const Checkout = ({ cartItems, cartTotal }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <h2>Image</h2>
            </div>
            <div className='header-block'>
                <h2>Name</h2>
            </div>
            <div className='header-block'>
                <h2>Quantity</h2>
            </div>
            <div className='header-block'>
                <h2>Price</h2>
            </div>
            <div className='last-child'>
                <h2>Remove</h2>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem
                    key={cartItem.id}
                    item={cartItem}
                />
            ))
        }
        <div className='total'>
            <span>TOTAL : ${cartTotal}</span>
        </div>
        <div className='test-warning'>
            Please use following test cards for payments
            <br />
            4242 4242 4242 4242 - Exp: any future date and - CVV: any three digit code
        </div>
        <div className='button'>
            <StripeButton price={cartTotal} />
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector,
    cartTotal: cartTotalCount
})

export default connect(mapStateToProps)(Checkout)
