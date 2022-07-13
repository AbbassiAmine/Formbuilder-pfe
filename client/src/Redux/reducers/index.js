import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import formReducers from "./form.reducers";
import fieldReducers from "./fields.reducers";
export const createRootReducer = (routerReducer) =>
  combineReducers({
    router: routerReducer,
    authReducers,
    formReducers,
    fieldReducers,
  });
export default createRootReducer