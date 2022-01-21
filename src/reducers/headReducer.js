import { SET_TAGLINE } from "../actions/actionTypes";

const initialState = {
    tagline: 'Demo application created in React App!'

}

//update store based on type and payload and return state
export default function common(state = initialState, action) {
    switch (action.type) {
        case SET_TAGLINE:
            const { tagline } = action.payload;
            return {
                ...state,
                tagline
            }
        default:
            return state
    }
}