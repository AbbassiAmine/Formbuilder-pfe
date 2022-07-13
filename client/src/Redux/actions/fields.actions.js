import { instance } from "../../apis/api.instance";
import {
  ADD_FIELD,
  UPDATE_FIELD,
  DELETE_FIELD,
  GET_FIELDS,
  FIELD_ERROR,
  DELETE_OPTION_FROM_FIELD,
  ADD_OPTION_TO8FIELD,
  FIELD_LOADING,
} from "../constants/actions";

export const addField = (id, data) => async (dispatch) => {
  try {
    const res = await instance.post(`api/forms/${id}/fields`, data);
    dispatch({
      type: ADD_FIELD,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FIELD_ERROR,
      payload: error,
    });
  }
};

export const deleteField = (formId, fieldId, index) => async (dispatch) => {
  try {
    await instance.delete(`/api/forms/${formId}/fields/${fieldId}`);
    dispatch({
      type: DELETE_FIELD,
      payload: fieldId,
    });
  } catch (error) {
    dispatch({
      type: FIELD_ERROR,
      payload: error,
    });
  }
};

export const updateField = (formId, fieldId, data) => async (dispatch) => {
  try {
    const res = await instance.put(
      `/api/forms/${formId}/fields/${fieldId}`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch({
      type: UPDATE_FIELD,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FIELD_ERROR,
      payload: error,
    });
  }
};

export const removeOptionFromField =
  (formId, fieldId, data) => async (dispatch) => {
    try {
      const res = await instance.put(
        `/api/forms/${formId}/fields/${fieldId}/options/`,
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch({
        type: DELETE_OPTION_FROM_FIELD,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: FIELD_ERROR,
        payload: error,
      });
    }
  };

export const addOptionToField = (formId, fieldId, data) => async (dispatch) => {
  try {
    const res = await instance.put(
      `/api/forms/${formId}/fields/${fieldId}/options/`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch({
      type: ADD_OPTION_TO8FIELD,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FIELD_ERROR,
      payload: error,
    });
  }
};

export const getFields = (id) => async (dispatch) => {
  dispatch({
    type: FIELD_LOADING,
  });
  try {
    const res = await instance.get(`/api/forms/${id}/fields`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: GET_FIELDS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FIELD_ERROR,
      payload: error,
    });
  }
};
