import {
  UPDATE_FIELD,
  DELETE_FIELD,
  GET_FIELDS,
  FIELD_ERROR,
  DELETE_OPTION_FROM_FIELD,
  ADD_OPTION_TO8FIELD,
} from "../constants/actions";
const initialState = {
  fields: [],
  field: null,
  isLoading: false,
  error: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_FIELD:
      return {
        ...state,
        field: payload,
        isLoading: false,
      };

    case DELETE_OPTION_FROM_FIELD:
      return {
        ...state,
        field: payload,
        isLoading: false,
      };

    case ADD_OPTION_TO8FIELD:
      return {
        ...state,
        field: payload,
        isLoading: false,
      };

    case GET_FIELDS:
      return {
        ...state,
        field: payload,
        isLoading: false,
      };

    case FIELD_ERROR:
      return {
        isLoading: false,
        fields: [],
        field: null,
        error: payload,
      };
    default:
      return state;
  }
}
