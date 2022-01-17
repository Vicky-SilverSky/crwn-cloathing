import { ADD_ITEM, DECREASE_QTY, INCREASE_QTY, REMOVE_CART_ITEM, TOGGLE_CART_DROPDOWN } from "./cart.types"

export const toggleCartDropDown = () => {
    return {
        type: TOGGLE_CART_DROPDOWN
    }
}

export const addItem = (cartItem) => {
    return {
        type: ADD_ITEM,
        payload: cartItem
    }
}

export const increaseQty = (cartItem) => {
    return {
        type: INCREASE_QTY,
        payload: cartItem
    }
}

export const decreaseQty = (cartItem) => {
    return {
        type: DECREASE_QTY,
        payload: cartItem
    }
}

export const removeCartItem = (cartItem) => {
    return {
        type: REMOVE_CART_ITEM,
        payload: cartItem
    }
}