import { GET_USER_LIST_STARTED, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE } from "../actions/actionTypes";

//define initial state
const initialState = {
    data: null,
    loading: false,
    error: null
}

export default function common(state = initialState, action) {
    switch (action.type) {
        case GET_USER_LIST_STARTED:
            return {
                ...state,
                loading: true
            }
        case GET_USER_LIST_SUCCESS:
            const { data } = action.payload;
            return {
                ...state,
                data,
                loading: false
            }
        case GET_USER_LIST_FAILURE:
            const { error } = action.payload
            return {
                ...state,
                error
            }
        default:
            return state
    }
}