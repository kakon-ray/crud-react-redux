import { GET_DETAILS, POST_DETAILS } from "../type";
import { GetApiDetails, PostApiDetails } from "../../api/axiosRequest";

const GetApiAction = () => {
  return function (dispatch) {
    return GetApiDetails().then((res) => {
      dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
    });
  };
};

const PostApiAction = (request) => {
  return function (dispatch) {
    return PostApiDetails(request).then((res) => {
      console.log(res);
      dispatch({
        type: POST_DETAILS,
        payload: "",
      });
    });
  };
};

export { GetApiAction, PostApiAction };
