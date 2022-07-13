import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/actions/auth.actions";
import google from "../../images/Frame 7.png";
import check from "../../images/chek.svg";
import HappyForms from "../../images/formshappy.svg";
import Spinner from "../../Pages/Shared/Spinner/index";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated } = useSelector((state) => {
    return state.authReducers;
  });
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });
  const onInputChange = (e) => {
    e.preventDefault();
    setForm({ ...Form, [e.target.name]: e.target.value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(login(Form));
    setForm({
      email: "",
      password: "",
    });
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className=" bg-[#DCE0FE] w-full  items-center justify-center flex flex-row h-screen font-product">
      <div className="  items-center  flex flex-col w-2/6 h-5/6 bg-white ">
        <div className=" pr-16 pb-4  ">
          <h1 className=" pt-24 pb-2 font-black  text-3xl text-[#0A071B]">
            {" "}
            Login
          </h1>
          <h1 className=" pt-2 pb-2 text-[#696581] font-medium text-ms">
            {" "}
            See your growth and get consulting support !{" "}
          </h1>
        </div>
        <button
          className=" flex-row flex items-center justify-center gap-4 text-[#4B4B4B]  pt-6 border   bg-white  h-12 px-5 py-5  font-bold focus:outline-none rounded-full w-96 border-[#E1DFEC] "
          type="submit"
        >
          <span className=" ">
            {" "}
            <img src={google} alt="" />
          </span>
          <span className=" text-sm  font-black ">Sign up with Google</span>
        </button>
        <div className="  flex flex-row justify-center items-center  gap-1 text-[#DED7D7] text-xs  font-semibold">
          <h1> _______________________ </h1>
          <h1 className=" pt-3  text-ms"> or Sign up with Email </h1>
          <h1> _______________________ </h1>
        </div>
        <form onSubmit={(e) => onSubmitForm(e)} method="post">
          {" "}
          <h1
            className="  py-2 text-[#4B4B4B] font-semibold text-xs  pt-4  pr-60"
            htmlFor="email"
          >
            {" "}
            Email*{" "}
          </h1>
          <input
            value={Form.email}
            onChange={(e) => onInputChange(e)}
            id="email"
            className="  text-sm border border-[#E1DFEC] bg-white h-12  py-5 px-5  text-[#8C87A6] font-medium focus:outline-none rounded-full w-96 "
            type="email"
            name="email"
            placeholder="Mail@website.com"
          ></input>
          <h1
            className="  py-2 text-[#4B4B4B] font-semibold text-xs  pt-4  pr-60"
            htmlFor="password"
          >
            {" "}
            Password*{" "}
          </h1>
          <input
            value={Form.password}
            onChange={(e) => onInputChange(e)}
            id="password"
            className=" border text-sm border-[#E1DFEC] bg-white h-12   py-5 px-5 pr-16 text-[#8C87A6] font-medium focus:outline-none rounded-full w-96 "
            type="password"
            name="password"
            placeholder="Min. 8 Characters"
          ></input>
          <div className="  pl-2 pt-4 flex  items-center  gap-1">
            <span className="pr-2">
              {" "}
              <img src={check} alt="" />
            </span>
            <span className="  text-black font-medium  text-sm ">
              Remember me
            </span>
          </div>
          <div className="flex  justify-center pt-6">
            <button
              className="   border  bg-[#3366FF] h-12   text-white font-bold focus:outline-none rounded-full w-96 "
              type="submit"
            >
              <span className=" text-sm font-semibold ">Login</span>
            </button>
          </div>
          <div className=" pr-32 pb-4 pt-4 flex flex-row items-center justify-center gap-1">
            <span className=" text-sm text-[#0A071B] font-medium">
              Not registered yet?
            </span>
            <div className="  pt-[11px] h-12   text-[#3366FF] font-bold focus:outline-none rounded-full w-30 ">
              <Link to="/register" className=" text-sm font-semibold ">
                Create an account
              </Link>
            </div>
          </div>
          <div className=" pl-2 pt-3  text-xs text-[#AFADB8] font-medium">
            ©2022 Amine All rights reserved.{" "}
          </div>
        </form>
      </div>

      <div className="  flex flex-col items-center justify-center bg-[#3366FF] w-2/6 h-5/6">
        <img className="text-white w-2/3 pb-20 " src={HappyForms} alt="" />

        <h1 className="pl-10  text-white font-bold text-4xl font-product ">
          {" "}
          Turn your ideas into reality.{" "}
        </h1>
      </div>
    </div>
  );
};

export default Login;
