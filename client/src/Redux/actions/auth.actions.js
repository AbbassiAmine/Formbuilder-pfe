import {
  AUTH_ERROR,
  LOGIN,
  REGISTER,
  AUTH_LOADING,
  AUTH_CHECK,
  LOGOUT,
} from "../constants/actions";
import { setAuthToken } from "../../utils/authTokens";
import { instance } from "../../apis/api.instance";

export const check = () => async (dispatch) => {
  dispatch({
    type: AUTH_LOADING,
  });

  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }
  try {
    const res = await instance.get("/api/auth/check");
    dispatch({
      type: AUTH_CHECK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
  }
};

export const login = (data) => async (dispatch) => {
  dispatch({
    type: AUTH_LOADING,
  });
  try {
    const res = await instance.post("/api/auth/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setAuthToken(res.data.token);
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
  }
};

export const register = (data) => async (dispatch) => {
  dispatch({
    type: AUTH_LOADING,
  });
  try {
    const res = await instance.post("/api/auth/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: REGISTER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
  }
};


export const logout = () => async (dispatch) => {
  dispatch({
    type: AUTH_LOADING,
  });
  dispatch({
    type: LOGOUT,
  });
};
