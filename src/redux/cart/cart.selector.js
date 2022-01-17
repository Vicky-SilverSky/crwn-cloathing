import { createSelector } from 'reselect'

const cartSelector = state => state.cart

export const cartItemsSelector = createSelector(
    [cartSelector],
    (cart) => cart.cartItems
)

export const cartHidden = createSelector(
    [cartSelector],
    (cart) => cart.hidden
)

export const cartItemsCount = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce((prevVal, currVal) => prevVal + currVal?.quantity, 0)
)

export const cartTotalCount = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce((prevVal, currVal) => prevVal + (currVal?.price * currVal?.quantity), 0)
)