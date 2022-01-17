import React from "react";
import { connect } from "react-redux";
import { decreaseQty, increaseQty, removeCartItem } from "../../redux/cart/cart.action";
import './checkout-item.styles.scss'

const CheckoutItem = ({
    item: {
        id,
        imageUrl,
        name,
        quantity,
        price
    },
    increateQty,
    decreaseQty,
    removeItem
}) => (
    <div className="checkout-item">
        <div className='image-container'>
            <img alt='item' src={imageUrl} />
        </div>
        <div className='name'>
            <h2>{name}</h2>
        </div>
        <div className='quantity'>
            <h2 style={{ fontSize: 26 }}>
                <span style={{ marginRight: 10 }} onClick={() => decreaseQty({ id })}>
                    &#10134;
                </span>
                {quantity}
                <span style={{ marginLeft: 10 }} onClick={() => increateQty({ id })}>
                    &#10133;
                </span>
            </h2>
        </div>
        <div className='price'>
            <h2>{price}</h2>
        </div>
        <div className='remove-button' onClick={() => removeItem({ id })}>
            &#10005;
        </div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    increateQty: (payload) => dispatch(increaseQty(payload)),
    decreaseQty: (payload) => dispatch(decreaseQty(payload)),
    removeItem: (payload) => dispatch(removeCartItem(payload))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
