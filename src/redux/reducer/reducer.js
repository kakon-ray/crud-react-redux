import {
  GET_DETAILS,
  POST_DETAILS,
  UPDATE_DETAILS,
  GET_DETAILSBYID,
} from "../type";

const initialState = {
  details: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        details: action.payload,
      };
    case GET_DETAILSBYID:
      return {
        detailsById: action.payload,
      };

    case POST_DETAILS:
      return {
        isResponse: action.payload,
      };

    case UPDATE_DETAILS:
      return {
        updateResponse: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
