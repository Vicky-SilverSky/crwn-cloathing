import { SHOP_DATA } from "../../data/shop.data";

const initialState = SHOP_DATA

const collection = (state = initialState, action) => {
    const { type, payload } = action
    switch(type) {
        default:
            return state
    }
}

export default collection
