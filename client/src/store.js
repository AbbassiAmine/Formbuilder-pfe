import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import createRootReducer from "./Redux/reducers";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

const initialState = {};
const middlewares = [thunk, routerMiddleware];

export const store = createStore(
  createRootReducer(routerReducer),
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const history = createReduxHistory(store);
