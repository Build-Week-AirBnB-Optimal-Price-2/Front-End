import {
    FETCH_DATA,
    UPDATE_PROPERTIES,
    SET_ERROR
} from '../actions'

const initialState = {
    properties: [],
    error: '',
    isFetchingData: false
}

export const propertyReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true
            };
        case UPDATE_PROPERTIES:
            return {
                ...state,
                properties: action.payload,
                isFetchingData: false
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                isFetchingData: false
            }
        default:
            return state;
    }
}