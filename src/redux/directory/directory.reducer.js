import { sections } from "../../data/directory.data";

const initialState = sections

const directory = (state = initialState, action) => {
    const { type, payload } = action
    switch(type) {
        default:
            return state
    }
}

export default directory
