import { store, history } from "./store";
import { check } from "../src/Redux/actions/auth.actions";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Forms from "./Pages/Forms";
import { Provider } from "react-redux";
import { setAuthToken } from "../src/utils/authTokens";
import Dashboard from "./Pages/Dashboard";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import RequiredAuth from "./routes/requireAuth";
import Questions from "./Pages/Forms/Questions";
import Responses from "./Pages/Forms/Responses";
import Profile from "./Pages/Profile";
import User from "./Pages/User";

function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    store.dispatch(check());
  }, []);
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="">
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/" element={<RequiredAuth />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/forms/:formId" element={<Forms />}>
                <Route path="" element={<Questions />}></Route>
                <Route path="responses" element={<Responses />}></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="/forms/:formId/:userId" element={<User />}></Route>
              </Route>
              <Route path="/forms" element={<Dashboard />}></Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
