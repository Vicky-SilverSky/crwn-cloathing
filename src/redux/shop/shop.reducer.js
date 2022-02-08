import { SHOP_DATA } from "../../data/shop.data";
import shopTypes from "./shop.types";

const initialState = {
    isFetching: false,
    errorMessage: '',
    data: {}
}

const collection = (state = initialState, action) => {
    const { type, payload } = action
    switch(type) {
        case shopTypes.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true
            }
        case shopTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                data: payload,
                isFetching: false
            }
        case shopTypes.FETCH_COLLECTION_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMessage: payload
            }
        default:
            return state
    }
}

export default collection
