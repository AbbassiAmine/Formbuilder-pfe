import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Redux/actions/auth.actions";
import google from "../../images/Frame 7.png";
import check from "../../images/chek.svg";
import HappyForms from "../../images/formshappy.svg";
import { Link } from "react-router-dom";
import Spinner from "../../Pages/Shared/Spinner/index";
const Register = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => {
    return state.authReducers;
  });
  const [Form, setForm] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });
  const onInputChange = (e) => {
    e.preventDefault();
    setForm({ ...Form, [e.target.name]: e.target.value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();

    dispatch(register(Form));
    setForm({
      firstName: "",
      lastName: "",
      password: "",
      email: "",
    });
  };
  return isLoading ? (
    <Spinner />
  ) : (
    <div className=" bg-[#DCE0FE] w-full items-center justify-center flex flex-row h-screen font-product ">
      <div className="  items-center  flex flex-col w-2/6 h-5/6 bg-white ">
        <div className="h-12 ">
          <div className=" mr-10">
            {" "}
            <h1 className=" pt-10 pb-3 font-black  text-3xl text-[#0A071B] ">
              {" "}
              Sign Up
            </h1>
            <h1 className=" pt-2 pb-4  text-[#696581] font-medium text-ms">
              {" "}
              See your growth and get consulting support !{" "}
            </h1>
          </div>

          <button
            className=" flex-row flex items-center justify-center gap-4 text-[#4B4B4B]  pt-6 border   bg-white  h-12 px-5 py-5  font-bold focus:outline-none rounded-full w-96 border-[#E1DFEC] "
            type="submit"
          >
            <span className="text-xs">
              {" "}
              <img src={google} alt="" />
            </span>
            <span className=" text-sm font-black ">Sign up with Google</span>
          </button>
          <div className="  flex flex-row justify-center items-center  gap-1 text-[#DED7D7] text-xs  font-semibold">
            <h1> _______________________ </h1>
            <h1 className=" pt-3  text-ms"> or Sign up with Email </h1>
            <h1> _______________________ </h1>
          </div>
          <h1
            className=" text-[#4B4B4B] font-semibold text-xs  mt-4  mr-60  "
            htmlFor="firstName"
          >
            {" "}
            FirstName*{" "}
          </h1>
          <form onSubmit={(e) => onSubmitForm(e)} method="post">
            {" "}
            <input
              value={Form.firstName}
              onChange={(e) => onInputChange(e)}
              id="firstName"
              className=" mt-2 text-sm border border-[#E1DFEC] bg-white h-12  py-5 px-5  text-[#8C87A6] font-medium focus:outline-none rounded-full w-96  "
              type="firstName"
              name="firstName"
              placeholder="FirstName"
            ></input>
            <h1
              className="  text-[#4B4B4B] font-semibold text-xs  mt-4  mr-60 "
              htmlFor="lastName"
            >
              {" "}
              LastName*{" "}
            </h1>
            <input
              value={Form.lastName}
              onChange={(e) => onInputChange(e)}
              id="lastName"
              className=" mt-2 text-sm border border-[#E1DFEC] bg-white h-12  py-5 px-5  text-[#8C87A6] font-medium focus:outline-none rounded-full w-96 "
              type="lastName"
              name="lastName"
              placeholder="LastName"
            ></input>
            <h1
              className="  text-[#4B4B4B] font-semibold text-xs  mt-4  mr-60"
              htmlFor="email"
            >
              {" "}
              Email*{" "}
            </h1>
            <input
              value={Form.email}
              onChange={(e) => onInputChange(e)}
              id="email"
              className=" mt-2 text-sm border border-[#E1DFEC] bg-white h-12  py-5 px-5  text-[#8C87A6] font-medium focus:outline-none rounded-full w-96  "
              type="email"
              name="email"
              placeholder="Mail@website.com"
            ></input>
            <h1
              className="  text-[#4B4B4B] font-semibold text-xs  mt-4  mr-60"
              htmlFor="password"
            >
              {" "}
              Password*{" "}
            </h1>
            <input
              value={Form.password}
              onChange={(e) => onInputChange(e)}
              id="password"
              className=" mt-2 text-sm border border-[#E1DFEC] bg-white h-12  py-5 px-5  text-[#8C87A6] font-medium focus:outline-none rounded-full w-96  "
              type="password"
              name="password"
              placeholder="Min. 8 Caracters"
            ></input>
            <div className=" pr-20 pt-4  flex flex-row items-center justify-center gap-1">
              <span className="pr-1">
                {" "}
                <img src={check} alt="" />
              </span>
              <span className=" text-black font-medium  text-sm">
                I agree to the
              </span>
              <span className=" mr-16 flex flex-start text-sm text-[#3366FF] font-bold">
                Terms & Conditions
              </span>
            </div>
            <div className="">
              <button
                className="  mt-5 border  bg-[#3366FF] h-12   text-white font-bold focus:outline-none rounded-full w-96 "
                type="submit"
              >
                <span className=" text-sm font-semibold ">Sign up </span>
              </button>
            </div>
            <div className="  pr-16 mb-5 mt-3 flex flex-row items-center justify-center gap-1">
              <span className=" text-sm text-[#0A071B] font-medium">
                Already have an Account?
              </span>
              <Link
                to="/Login"
                className=" mr-28 text-sm text-[#3366FF] font-semibold"
              >
                Login
              </Link>
            </div>
            <div className=" mb-40  mr-28 text-[12px] text-[#AFADB8] font-medium">
              ©2022 Amine All rights reserved.{" "}
            </div>
          </form>
        </div>
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

export default Register;
