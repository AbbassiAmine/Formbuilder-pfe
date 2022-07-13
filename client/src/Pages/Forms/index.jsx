import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormWithFields } from "../../Redux/actions/form.actions";
import happyform from "../../images/happyform.svg";
import profile from "../../images/Ellipse 1.svg";
import option from "../../images/option.svg";
import { Outlet, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Forms = () => {
  const { formId, userId } = useParams();
  const dispatch = useDispatch();
  const [Form, setForm] = useState({
    title: "",
    description: "",
  });

  const { isAuthenticated } = useSelector((state) => state.authReducers);
  const { form, isLoading } = useSelector((state) => state.formReducers);
  const onInputChange = (e) => {
    e.preventDefault();
    setForm({ ...Form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (form) {
      setForm({
        title: form.title,
        description: form.description,
      });
    }
  }, [isLoading]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     dispatch(updateForm(formId, Form));
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [formId]);

  // useEffect(() => {
  //   dispatch(updateForm(formId, Form));
  // }, [formId]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     dispatch(getFormWithFields(formId));
  //   }
  // }, [isAuthenticated]);

  return (
    <div className=" w-full h-full bg-white rounded-lg  flex flex-col font-Lato ">
      <div className="  border border-[#EAEBEF]  flex flex-col rounded-t-lg ">
        <div className=" bg-white rounded-lg-md flex h-20 items-center justify-between ">
          <Link to="/forms" className="p-8">
            <img src={happyform} alt="" />{" "}
          </Link>
          <div className="flex justify-center gap-8 p-8">
            <button
              className=" items-center rounded flex justify-center  border-2  bg-[#EEEEEE] h-10  text-[#3366FF]  focus:outline-none w-24 "
              type="submit"
            >
              <span className="  font-bold text-base">Preview </span>
            </button>
            <NavLink to={`/forms/${formId}/${userId}`}>
              <button
                className=" items-center rounded flex justify-center  border-2  bg-[#3366FF] h-10  text-white  focus:outline-none w-20 "
                type="submit"
              >
                <span className=" font-bold text-base">Send</span>
              </button>
            </NavLink>
            <NavLink to={`/forms/${formId}/profile`}>
              <img src={profile} alt="" />{" "}
            </NavLink>
          </div>
        </div>
        <div className=" flex  justify-center  p-3 gap-5  ">
          <NavLink
            to={`/forms/${formId}`}
            end
            className={({ isActive }) =>
              isActive ? "text-[#3366FF]" : "text-[#4B4B4B]"
            }
          >
            <hr
              className={({ isActive }) =>
                isActive
                  ? "font-bold  text-xl text-[#3366FF] "
                  : "font-bold text-xl text-[#4B4B4B] "
              }
            />
            <p className=" pr-5 ">Questions</p>
          </NavLink>

          <NavLink
            to={`/forms/${formId}/responses`}
            className={({ isActive }) =>
              isActive ? "text-[#3366FF]" : "text-[#4B4B4B]"
            }
          >
            <hr
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-xl text-[#3366FF]"
                  : "font-bold text-xl text-[#4B4B4B] "
              }
            />
            <p className=" pr-5 ">Responses</p>
          </NavLink>
        </div>
      </div>
      {/* Fields */}

      <Outlet />
    </div>
  );
};

export default Forms;
