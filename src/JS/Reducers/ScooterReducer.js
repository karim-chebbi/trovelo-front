import { ADD_SCOOTER_ERROR, ADD_SCOOTER_LOADING, ADD_SCOOTER_SUCCESS, CLEAR_ERRORS_SCOOTER, CLEAR_SUCCESS_SCOOTER, DELETE_SCOOTER_ERROR, DELETE_SCOOTER_LOADING, DELETE_SCOOTER_SUCCESS, EDIT_SCOOTER_ERROR, EDIT_SCOOTER_LOADING, EDIT_SCOOTER_SUCCESS, GET_SCOOTERS_ERROR, GET_SCOOTERS_LOADING, GET_SCOOTERS_SUCCESS, GET_SCOOTER_BY_ID_ERROR, GET_SCOOTER_BY_ID_LOADING, GET_SCOOTER_BY_ID_SUCCESS } from "../ActionTypes/scooterActionTypes";


const initialState = {
  load: false,
  success: null,
  errors: null,
  scooters: [],
  scooter: {},
};

const ScooterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SCOOTERS_LOADING:
      return { ...state, load: true, errors: null };

    case GET_SCOOTERS_SUCCESS:
      return { ...state, load: false, scooters: payload.scooters };

    case GET_SCOOTERS_ERROR:
      return { ...state, load: false, errors: payload };

    case GET_SCOOTER_BY_ID_LOADING:
      return { ...state, load: true, errors: null };

    case GET_SCOOTER_BY_ID_SUCCESS:
      return { ...state, load: false, scooter: payload.scooter };

    case GET_SCOOTER_BY_ID_ERROR:
      return { ...state, load: false, errors: payload };

    case ADD_SCOOTER_LOADING:
      return { ...state, load: true, errors: null };

    case ADD_SCOOTER_SUCCESS:
      return {
        ...state,
        load: false,
        scooters: [payload.scooter, ...state.scooters],
        success: payload.success,
      };

    case ADD_SCOOTER_ERROR:
      return { ...state, load: false, errors: payload.errors };

    case DELETE_SCOOTER_LOADING:
      return { ...state, load: true, errors: null };

    case DELETE_SCOOTER_SUCCESS:
      return { ...state, load: false, success: payload.success };

    case DELETE_SCOOTER_ERROR:
      return { ...state, load: false, errors: payload.errors };

    case EDIT_SCOOTER_LOADING:
      return { ...state, load: true, errors: null };

    case EDIT_SCOOTER_SUCCESS:
      return {
        ...state,
        load: false,
        scooter: payload.scooter,
        success: payload.success,
      };

    case EDIT_SCOOTER_ERROR:
      return { ...state, load: false, errors: payload.errors };

    case CLEAR_SUCCESS_SCOOTER:
      return { ...state, success: null };

    case CLEAR_ERRORS_SCOOTER:
      return { ...state, errors: null };

    default:
      return state;
  }
};

export default ScooterReducer;
