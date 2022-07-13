import React from "react";
import HappyForms from "../../images/g918.svg";
import image1 from "../../images/forms.bmp";
import image2 from "../../images/Loginnnnnnnn.png";
import rectangle from "../../images/Rectangle 16.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/actions/auth.actions";

const Home = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.authReducers);

  return (
    <div className="flex flex-col font-roboto ">
      <div className=" flex flex-row  px-8 pt-16 ">
        <div className=" px-12">
          <img src={HappyForms} alt="" />
        </div>
        <div className="ml-auto px-12 flex flex-row gap-12">
          {!isAuthenticated ? (
            <div className=" flex flex-row gap-12">
              {" "}
              <Link
                className=" items-center rounded flex justify-center  border  bg-[#EEEEEE] h-14   text-[#3366FF] font-bold focus:outline-none  w-40 "
                type="submit"
                to={`/login/`}
              >
                <span className=" font-black  text-[22px] ">Go to Forms</span>
              </Link>
              <Link
                className=" items-center rounded flex justify-center  border   bg-[#1939B7] h-14  text-white font-bold focus:outline-none  w-28 "
                type="submit"
                to={`/login/`}
              >
                <span className="  font-black  text-[22px] ">Sign In</span>
              </Link>
            </div>
          ) : (
            <div className=" flex flex-row gap-12">
              <button
                className=" items-center rounded flex justify-center  border  bg-[#EEEEEE] h-14   text-[#3366FF] font-bold focus:outline-none  w-40 "
                type="submit"
              >
                <Link to={`/forms/`}>
                  <span className=" font-black  text-[22px] ">Go to Forms</span>
                </Link>
              </button>

              <button
                className=" items-center rounded flex justify-center  border   bg-[#3366FF] h-14  text-white font-bold focus:outline-none  w-28 "
                type="button"
                onClick={() => dispatch(logout())}
              >
                <span className="  font-black  text-[22px] ">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
      <h1 className="  pt-40 font-black text-6xl flex text-[#4B4B4B] justify-center">
        Powerful forms get it done.{" "}
      </h1>
      <div className="  flex justify-center items-center gap-40 pt-48 pl-14 ">
        <h1 className=" font-bold  text-[#4B4B4B] text-5xl w-1/4">
          {" "}
          Get insights quickly, with HappyForms
        </h1>
        <img className="w-4/12 " src={image2} alt="" />
      </div>
      <div className="flex justify-center items-center gap-40 pt-28 pr-28 ">
        <img className="w-4/12" src={image1} alt="" />
        <h1 className="font-bold  text-[#4B4B4B] text-5xl w-[500px]">
          {" "}
          Create an online form as easily as creating a document
        </h1>
      </div>
      <div className="flex justify-center pt-40">
        {" "}
        <img src={rectangle} alt="" />
      </div>

      <div className="flex justify-center gap-20 flex-row pt-5">
        
        <h1 className="w-40">
          {" "}
          POPULAR FORMS Application Forms Consent forms Evaluation forms
          Feedback forms Medical forms Registration forms Request forms{" "}
        </h1>
        <h1 className="w-40">
          {" "}
          POPULAR FORMS Application Forms Consent forms Evaluation forms
          Feedback forms Medical forms Registration forms Request forms{" "}
        </h1>
      </div>
    </div>
  );
};

export default Home;
