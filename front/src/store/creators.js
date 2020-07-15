import {
  GET_CARS_START,
  GET_CARS_SUCCESS,
  GET_CARS_ERROR,
  ADD_FILTER,
  GET_CITIES_START,
  GET_CITIES_SUCCESS,
  GET_CITIES_ERROR
} from "./types";

import Api from "../services/Services";


// Get Cars
export const getCarsStart = () => ({
  type: GET_CARS_START
});

export const getCarsSuccess = results => ({
  type: GET_CARS_SUCCESS,
  payload: {
    results
  }
});

export const getCarsError = message => ({
  type: GET_CARS_ERROR,
  payload: {
    message
  }
});

export const getCars = () => async dispatch => {
  dispatch(getCarsStart());
  try {
    const data = await Api.cars.fetchAll();
    if (data) {
      dispatch(getCarsSuccess(data));
    } else {
      dispatch(getCarsError("Something went wrong, please try again."));
    }
  } catch (error) {
    console.error(error)
    dispatch(getCarsError("Something went wrong, please try again."));
  }
};

export const getCarsByCity = (city) => async dispatch => {
  dispatch(getCarsStart());
  try {
    const data = await Api.cars.fetchByCity(city);
    if (data) {
      dispatch(getCarsSuccess(data));
    } else {
      dispatch(getCarsError("Something went wrong, please try again."));
    }
  } catch (error) {
    console.error(error)
    dispatch(getCarsError("Something went wrong, please try again."));
  }
};

export const addFilter = filter => ({
  type: ADD_FILTER,
  payload: {
    filter
  }
})


// Get Cities
export const getCitiesStart = () => ({
  type: GET_CITIES_START
});

export const getCitiesSuccess = results => ({
  type: GET_CITIES_SUCCESS,
  payload: {
    results
  }
});

export const getCitiesError = message => ({
  type: GET_CITIES_ERROR,
  payload: {
    message
  }
});

export const getCities = () => async dispatch => {
  dispatch(getCitiesStart());
  try {
    const data = await Api.cities.fetchAll();
    if (data) {
      dispatch(getCitiesSuccess(data));
    } else {
      dispatch(getCitiesError("Something went wrong, please try again."));
    }
  } catch (error) {
    console.error(error)
    dispatch(getCitiesError("Something went wrong, please try again."));
  }
};
