import { FETCH_DATA, UPDATE_PROPERTIES, SET_ERROR, SET_USER } from "../actions";

const initialState = {
  userId: -1,
  properties: [],
  error: "",
  isFetchingData: false,
  updateProperties: false
};

export const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
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
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetchingData: false
      };
    case SET_USER:
      return {
        ...state,
        userId: action.payload
      };
    default:
      return state;
  }
};
