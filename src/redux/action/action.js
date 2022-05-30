import { GET_DETAILS } from "../type";
import GetApiDetails from "../../api/axiosRequest";

const Actions = () => {
  return function (dispatch) {
    return GetApiDetails().then((res) => {
      dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
    });
  };
};

export default Actions;
