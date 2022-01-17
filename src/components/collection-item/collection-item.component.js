import React from "react";
import './collection-item.styles.scss'

import CustomButton from '../custom-button/custom-button.component'
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItem }) => {
    const { id, name, imageUrl, price } = item

    return (
        <div className="collection-item">
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                className="image"
            />
            <div className="collection-footer">
                <span className="title">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton
                className='custom-button'
                type="button"
                inverted
                onClick={() => addItem(item)}
            >
                Add To Cart
            </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
