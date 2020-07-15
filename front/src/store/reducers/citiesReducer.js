import {
    GET_CITIES_START,
    GET_CITIES_SUCCESS,
    GET_CITIES_ERROR,
  } from "../types";
  
  const initialState = {
    cities: [],
    loading: false,
  };
  
  const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CITIES_START: {
        return {
          ...state,
          loading: true
        };
      }
      case GET_CITIES_SUCCESS: {
        return {
          ...state,
          loading: false,
          cities: action.payload.results
        };
      }
      case GET_CITIES_ERROR: {
        return {
          ...state,
          loading: false,
          loadedData:false,
          message: action.payload.message
        };
      }
      
      default:
        return state;
    }
  };
  
  export default citiesReducer;
  