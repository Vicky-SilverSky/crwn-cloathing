import { ADD_ITEM, DECREASE_QTY, INCREASE_QTY, REMOVE_CART_ITEM, TOGGLE_CART_DROPDOWN } from "./cart.types"

const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_ITEM:
            const existState = { ...state }
            const existCartItems = [...existState.cartItems]
            const isExist = existCartItems.findIndex(cartItem => cartItem.id === payload.id)
            const updatedCartItems = [...existCartItems]
            if (isExist === -1) {
                updatedCartItems.push({
                    ...payload,
                    quantity: 1
                })
            } else {
                updatedCartItems[isExist] = {
                    ...updatedCartItems[isExist],
                    quantity: updatedCartItems[isExist].quantity +1
                }
            }
            return {
                ...state,
                cartItems: [...updatedCartItems]
            }
        case INCREASE_QTY:
            const existItems = [...state.cartItems]
            const existIndex = existItems.findIndex(cartItem => cartItem.id === payload.id)
            const updatedItems = [...existItems]
            if (existIndex !== -1) {
                updatedItems[existIndex] = {
                    ...updatedItems[existIndex],
                    quantity: updatedItems[existIndex].quantity + 1
                }
            }
            return {
                ...state,
                cartItems: [...updatedItems]
            }
        case DECREASE_QTY:
            const cartItems = [...state.cartItems]
            const index = cartItems.findIndex(cartItem => cartItem.id === payload.id)
            let updatedCart = [...cartItems]
            if (index !== -1) {
                if (updatedCart[index].quantity > 1) {
                    updatedCart[index] = {
                        ...updatedCart[index],
                        quantity: updatedCart[index].quantity - 1
                    }
                } else {
                    updatedCart = updatedCart.filter(cartItem => cartItem.id !== payload.id)
                }
            }
            return {
                ...state,
                cartItems: [...updatedCart]
            }
        case REMOVE_CART_ITEM:
            const cart = [...state.cartItems]
            return {
                ...state,
                cartItems: cart.filter(cartItem => cartItem.id !== payload.id)
            }
        default:
            return state
    }
}

export default cartReducer