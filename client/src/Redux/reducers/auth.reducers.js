import {
  LOGIN,
  REGISTER,
  AUTH_ERROR,
  AUTH_CHECK,
  AUTH_LOADING,
  LOGOUT,
} from "../constants/actions";
const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  error: {},
  isLoading: false,
  isAuthenticated: false,
  isError: false,
  isSuccess: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case AUTH_CHECK:
      return {
        ...state,
        user: payload.user,
        isAuthenticated: true,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    case LOGIN:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };

    case REGISTER:
      return {
        ...state,
        user: payload,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case AUTH_ERROR:
      return {
        isAuthenticated: false,
        user: null,
        token: null,
        err: payload.err,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };

    default:
      return state;
  }
}
