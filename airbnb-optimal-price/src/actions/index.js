import { axiosWithAuth } from '../utils/axiosWithAuth';
import { axiosWithAuthDS } from '../utils/axiosWithAuthDS';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_PROPERTIES = 'UPDATE_PROPERTIES';
export const SET_ERROR = 'SET_ERROR';
export const SET_USER = 'SET_USER';
export const OPTIMIZE_PRICE = 'OPTIMIZE_PRICE';
export const SET_PRICE = 'SET_PRICE';
export const ADD_PROPERTY = 'ADD_PROPERTY';

export const getData = userId => dispatch => {
  dispatch({ type: FETCH_DATA });
  axiosWithAuth()
    .get(`/data/output/${userId}`)
    .then(res => {
      dispatch({ type: UPDATE_PROPERTIES, payload: res.data });
    })
    .catch(error => {
      console.error('error fetching data from api, error: ', error);
      dispatch({ type: SET_ERROR, payload: 'Error fetching data from api' });
    });
};

export const getPrice = property => dispatch => {
  dispatch({ type: OPTIMIZE_PRICE });
  axiosWithAuthDS()
    .post('/', property)
    .then(res => {
      dispatch({ type: SET_PRICE, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const setUserId = userId => dispatch => {
  dispatch({ type: SET_USER, payload: userId });
};

export const addProperty = property => dispatch => {
  dispatch({ type: ADD_PROPERTY, payload: property });
};
