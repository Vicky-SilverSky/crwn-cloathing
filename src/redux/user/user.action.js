import { SET_CURRENT_USER } from "./user.types"

export const setCurrentUser = (userData) => {
    return {
        type: SET_CURRENT_USER,
        payload: userData
    }
}