import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

const initialState =[]
export const reducer = (state =initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ]
            break;

        case REMOVE_FROM_CART:
            let result = state.filter((item)=> item.title != action.data.title)
            return [
                ...result
            ]
            break;
        default:
            return state
            break;
    }

}