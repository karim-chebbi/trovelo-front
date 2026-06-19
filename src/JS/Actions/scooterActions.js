
import axios from "axios";
import { ADD_SCOOTER_ERROR, ADD_SCOOTER_LOADING, ADD_SCOOTER_SUCCESS, CLEAR_ERRORS_SCOOTER, CLEAR_SUCCESS_SCOOTER, DELETE_SCOOTER_ERROR, DELETE_SCOOTER_LOADING, DELETE_SCOOTER_SUCCESS, EDIT_SCOOTER_ERROR, EDIT_SCOOTER_LOADING, EDIT_SCOOTER_SUCCESS, GET_SCOOTERS_ERROR, GET_SCOOTERS_LOADING, GET_SCOOTERS_SUCCESS, GET_SCOOTER_BY_ID_ERROR, GET_SCOOTER_BY_ID_LOADING, GET_SCOOTER_BY_ID_SUCCESS } from "../ActionTypes/scooterActionTypes";

export const getAllScooters = () => async (dispatch) => {
  dispatch({ type: GET_SCOOTERS_LOADING });
  try {
    const result = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/scooters`,
    );
    dispatch({ type: GET_SCOOTERS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_SCOOTERS_ERROR, payload: error.response.data });
  }
};

export const getScooterById = (id) => async (dispatch) => {
  dispatch({ type: GET_SCOOTER_BY_ID_LOADING });
  try {
    const result = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/scooters/${id}`,
    );
    dispatch({ type: GET_SCOOTER_BY_ID_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: GET_SCOOTER_BY_ID_ERROR,
      payload: error.response.data,
    });
  }
};

export const addScooter = (newScooter) => async (dispatch) => {
  dispatch({ type: ADD_SCOOTER_LOADING });
  try {
    const result = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/scooters`,
      newScooter,
    );
    dispatch({ type: ADD_SCOOTER_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: ADD_SCOOTER_ERROR, payload: error.response.data });
  }
};

export const deleteScooter = (id) => async (dispatch) => {
  dispatch({ type: DELETE_SCOOTER_LOADING });
  try {
    const result = await axios.delete(
      `${import.meta.env.VITE_API_URL}/api/scooters/${id}`,
    );
    dispatch({ type: DELETE_SCOOTER_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: DELETE_SCOOTER_ERROR, payload: error.response.data });
  }
};

export const editScooter = (id, newData) => async (dispatch) => {
  dispatch({ type: EDIT_SCOOTER_LOADING });
  try {
    const result = await axios.patch(
      `${import.meta.env.VITE_API_URL}/api/scooters/${id}`,
      newData,
    );
    dispatch({ type: EDIT_SCOOTER_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: EDIT_SCOOTER_ERROR, payload: error.response.data });
  }
};

export const clearSuccessScooter = () => {
  return {
    type: CLEAR_SUCCESS_SCOOTER,
  };
};

export const clearErrorsScooter = () => {
  return {
    type: CLEAR_ERRORS_SCOOTER,
  };
};
