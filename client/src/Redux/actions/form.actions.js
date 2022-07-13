import { push } from "redux-first-history";
import { instance } from "../../apis/api.instance";

import {
  ADD_FORM,
  UPDATE_FORM,
  DELETE_FORM,
  GET_FORM,
  FORM_ERROR,
  FORM_LOADING,
  GET_FORMS,
} from "../constants/actions";

export const getMyForms = () => async (dispatch) => {
  dispatch({
    type: FORM_LOADING,
  });
  try {
    const res = await instance.get("/api/forms/");
    dispatch({
      type: GET_FORMS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FORM_ERROR,
      payload: error,
    });
  }
};

export const updateForm = (id, data) => async (dispatch) => {
  try {
    const res = await instance.put(`/api/forms/${id}`, data, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch({
      type: UPDATE_FORM,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FORM_ERROR,
      payload: error,
    });
  }
};

export const deleteForm = (id) => async (dispatch) => {
  try {
    await instance.delete(`/api/forms/${id}`);
    dispatch({
      type: DELETE_FORM,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: FORM_ERROR,
      payload: error,
    });
  }
};

export const getFormWithFields = (id) => async (dispatch) => {
  dispatch({
    type: FORM_LOADING,
  });
  try {
    const res = await instance.get(`/api/forms/${id}`);
    dispatch({
      type: GET_FORM,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FORM_ERROR,
      payload: error,
    });
  }
};


export const createForm = (data) => async (dispatch) => {
  try {
    dispatch({
      type: FORM_LOADING,
    });
    const res = await instance.post("/api/forms", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: ADD_FORM,
      payload: res.data,
    });
    dispatch(push(`/forms/${res.data._id}`));
  } catch (error) {
    dispatch({
      type: FORM_ERROR,
      payload: error,
    });
  }
};
