import {
  ADD_FORM,
  ADD_FIELD,
  UPDATE_FORM,
  DELETE_FORM,
  GET_FORM,
  FORM_ERROR,
  FORM_LOADING,
  GET_FORMS,
  DELETE_FIELD,
  UPDATE_FIELD,
} from "../constants/actions";

const initialState = {
  forms: [],
  form: null,
  isLoading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FORM_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_FIELD:
      return {
        ...state,
        form: payload,
        isLoading: false,
      };

    case ADD_FORM:
      let allforms = state.forms;
      allforms.push(payload);
      return {
        ...state,
        forms: [...allforms],
        isLoading: false,
      };

    case GET_FORMS:
      return {
        ...state,
        forms: payload,
        isLoading: false,
      };

    
    case DELETE_FIELD:
      return {
        ...state,
        form: {
          ...state.form,
          fields: state.form.fields.filter((field) => field._id !== payload),
        },
        isLoading: false,
      };

    case UPDATE_FORM:
      return {
        ...state,
        form: payload,
        isLoading: false,
      };

    case DELETE_FORM:
      return {
        ...state,
        forms: state.forms.filter((f) => f._id !== payload),
        isLoading: false,
      };
    case GET_FORM:
      return {
        ...state,
        form: payload,
        isLoading: false,
      };

    case FORM_ERROR:
      return {
        isLoading: false,

        form: null,
        error: payload,
      };
    default:
      return state;
  }
}
