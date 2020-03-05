import {
  FETCH_DATA,
  UPDATE_PROPERTIES,
  SET_ERROR,
  SET_USER,
  OPTIMIZE_PRICE,
  SET_PRICE,
  ADD_PROPERTY
} from '../actions';

const initialState = {
  userId: -1,
  properties: [],
  error: '',
  isFetchingData: false,
  updateProperties: []
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
    case OPTIMIZE_PRICE:
      return {
        ...state,
        updateProperties: [...state.updateProperties, action.payload]
      };
    case SET_PRICE:
      return {
        ...state,
        updateProperties: state.updateProperties.filter(
          item => item !== action.payload.key
        ),
        properties: state.properties.map(item =>
          item.id === action.payload.key
            ? { ...item, price_estimate: action.payload.price }
            : item
        )
      };
    default:
      return state;
  }
};
