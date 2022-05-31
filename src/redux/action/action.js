import {
  GET_DETAILS,
  POST_DETAILS,
  UPDATE_DETAILS,
  GET_DETAILSBYID,
  DELETE_DETAILS,
} from "../type";
import {
  GetApiDetails,
  GetApiDetailsById,
  PostApiDetails,
  UpdateApiDetails,
  DeleteApiDetails,
} from "../../api/axiosRequest";

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

const GetApiActionById = (id) => {
  return function (dispatch) {
    return GetApiDetailsById(id).then((res) => {
      dispatch({
        type: GET_DETAILSBYID,
        payload: res.data,
      });
    });
  };
};

const PostApiAction = (request) => {
  return function (dispatch) {
    dispatch({
      type: POST_DETAILS,
      payload: false,
    });
    return PostApiDetails(request).then((res) => {
      console.log(res);

      dispatch({
        type: POST_DETAILS,
        payload: true,
      });
    });
  };
};
const UpdateApiAction = (request, id) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_DETAILS,
      payload: false,
    });
    return UpdateApiDetails(request, id).then((res) => {
      console.log(res);

      dispatch({
        type: UPDATE_DETAILS,
        payload: true,
      });
    });
  };
};
const DeleteApiAction = (id) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_DETAILS,
      payload: false,
    });
    return DeleteApiDetails(id).then((res) => {
      console.log(res);

      dispatch({
        type: DELETE_DETAILS,
        payload: true,
      });
    });
  };
};

export {
  GetApiAction,
  GetApiActionById,
  PostApiAction,
  UpdateApiAction,
  DeleteApiAction,
};
