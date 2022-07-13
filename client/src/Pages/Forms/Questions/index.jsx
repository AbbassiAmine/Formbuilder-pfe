import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormWithFields } from "../../../Redux/actions/form.actions";
import { useParams } from "react-router-dom";
import { addField } from "../../../Redux/actions/fields.actions";
import { updateForm } from "../../../Redux/actions/form.actions.js";
import Field from "../../Forms/Fields/index";
const Questions = () => {
  const { formId } = useParams();
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

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getFormWithFields(formId));
    }
  }, [isAuthenticated]);
  return (
    <div>
      <div className="flex bg-white ">
        <div className="flex flex-col w-2/6  p-10 rounded-bl-lg space-y-12 ">
          <button
            className="items-start justify-center  gap-8 flex"
            onClick={() => dispatch(addField(formId, { type: "E-mail" }))}
          >
            <span class="material-symbols-outlined text-[#3366FF] text-4xl">
              alternate_email
            </span>
            <div className="items-start justify-center flex flex-col w-11/12  ">
              <h1 className="font-semibold text-2xl text-[#3366FF]">
                {" "}
                E-mail{" "}
              </h1>
              <p className="text-[#6F7492] text-left  font-normal text-xl">
                {" "}
                These answers could tend to take up more space, maybe 2-3 lines
                of text{" "}
              </p>
            </div>
          </button>

          <button
            className="items-start justify-center gap-8 flex"
            onClick={() => dispatch(addField(formId, { type: "Short Answer" }))}
          >
            <span className="material-symbols-outlined text-[#3366FF] text-4xl">
              short_text
            </span>
            <div className="items-start justify-center flex flex-col  ">
              <h1 className="font-semibold text-2xl text-[#3366FF]">
                {" "}
                Short Answer{" "}
              </h1>
              <p className="text-[#6F7492] text-left font-normal text-xl">
                {" "}
                These answers could tend to take up more space, maybe 2-3 lines
                of text{" "}
              </p>
            </div>
          </button>

          <button
            className="items-start justify-center gap-8 flex "
            onClick={() => dispatch(addField(formId, { type: "Paragraph" }))}
          >
            <span className="material-symbols-outlined text-[#3366FF] text-4xl ">
              subject
            </span>
            <div className="items-start justify-center flex flex-col  ">
              <h1 className="font-semibold text-2xl text-[#3366FF]">
                {" "}
                Paragraph{" "}
              </h1>
              <p className="text-[#6F7492] text-left font-normal text-xl">
                {" "}
                These answers could tend to take up more space, maybe 2-3 lines
                of text{" "}
              </p>
            </div>
          </button>
          <button
            className="items-start justify-center gap-8 flex  "
            onClick={() => dispatch(addField(formId, { type: "CheckBox" }))}
          >
            <span class="material-symbols-outlined text-[#3366FF] text-4xl">
              check_box
            </span>
            <div className="items-start justify-center flex flex-col  ">
              <h1 className="font-semibold text-2xl text-[#3366FF]">
                {" "}
                CheckBox{" "}
              </h1>
              <p className="text-[#6F7492] text-left font-normal text-xl">
                {" "}
                These answers could tend to take up more space, maybe 2-3 lines
                of text{" "}
              </p>
            </div>
          </button>

          <button
            className="items-start justify-center gap-8 flex  "
            onClick={() => dispatch(addField(formId, { type: "DropDown" }))}
          >
            <span class="material-symbols-outlined text-[#3366FF] text-4xl ">
              arrow_drop_down_circle
            </span>
            <div className="items-start justify-center flex flex-col  ">
              <h1 className="font-semibold text-2xl text-[#3366FF]">
                {" "}
                DropDown{" "}
              </h1>
              <p className="text-[#6F7492] text-left font-normal text-xl">
                {" "}
                These answers could tend to take up more space, maybe 2-3 lines
                of text{" "}
              </p>
            </div>
          </button>

          <button
            className="items-start justify-center gap-8 flex  "
            onClick={() => dispatch(addField(formId, { type: "FileUpload" }))}
          >
            <span class="material-symbols-outlined text-[#3366FF] text-4xl ">
              cloud_upload
            </span>
            <div className="items-start justify-center flex flex-col  ">
              <h1 className="font-semibold text-2xl text-[#3366FF]">
                {" "}
                FileUpload{" "}
              </h1>
              <p className="text-[#6F7492] text-left font-normal text-xl">
                {" "}
                These answers could tend to take up more space, maybe 2-3 lines
                of text{" "}
              </p>
            </div>
          </button>

          <button
            className="items-start justify-center gap-8 flex  "
            onClick={() =>
              dispatch(addField(formId, { type: "MultipleChoices" }))
            }
          >
            <span class="material-symbols-outlined text-[#3366FF] text-4xl">
              radio_button_checked
            </span>
            <div className="items-start justify-center flex flex-col  ">
              <h1 className="font-semibold text-2xl text-[#3366FF]">
                {" "}
                MultipleChoice{" "}
              </h1>
              <p className="text-[#6F7492] text-left font-normal text-xl">
                {" "}
                These answers could tend to take up more space, maybe 2-3 lines
                of text{" "}
              </p>
            </div>
          </button>

          <button className="items-start justify-center gap-8 flex  ">
            <span class="material-symbols-outlined text-[#3366FF] text-4xl">
              grid_on
            </span>
            <div className="items-start justify-center flex flex-col  ">
              <h1 className="font-semibold text-2xl text-[#3366FF]">
                {" "}
                CheckboxGrid{" "}
              </h1>
              <p className="text-[#6F7492] text-left font-normal text-xl">
                {" "}
                These answers could tend to take up more space, maybe 2-3 lines
                of text{" "}
              </p>
            </div>
          </button>

          <button className="items-start justify-center gap-8 flex  ">
            <span class="material-symbols-outlined text-[#3366FF] text-4xl">
              linear_scale
            </span>
            <div className="items-start justify-center flex flex-col  ">
              <h1 className="font-semibold text-2xl text-[#3366FF]">
                {" "}
                LinearScale{" "}
              </h1>
              <p className="text-[#6F7492] text-left font-normal text-xl">
                {" "}
                These answers could tend to take up more space, maybe 2-3 lines
                of text{" "}
              </p>
            </div>
          </button>

          <button className="items-start justify-center gap-8 flex  ">
            <span class="material-symbols-outlined text-[#3366FF] text-4xl">
              today
            </span>
            <div className="items-start justify-center flex flex-col  ">
              <h1 className="font-semibold text-2xl text-[#3366FF]"> Time </h1>
              <p className="text-[#6F7492] text-left font-normal text-xl">
                {" "}
                These answers could tend to take up more space, maybe 2-3 lines
                of text{" "}
              </p>
            </div>
          </button>
        </div>

        <div className=" items-center  flex flex-col w-4/6  rounded-br-lg ">
          <div className="  pt-20   flex flex-col  items-center  w-full  h-full  ">
            <div className=" w-full items-center justify-center  flex flex-col ">
              <div className=" w-8/12 h-40  flex-col flex justify-center items-center border border-t-8 border-t-[#3366FF] border-[#CDD2F2]  bg-white rounded-lg">
                <div className="w-full pb-2  flex justify-center items-center ">
                  <input
                    onChange={(e) => onInputChange(e)}
                    htmlFor="title"
                    value={Form.title ? Form.title : ""}
                    id="title"
                    className=" border-[#CDD2F2] border rounded-lg bg-white h-10  w-5/6  flex dont-black text-4xl    py-5 px-2  text-slate-600 font-medium focus:outline-none   "
                    type="text"
                    name="title"
                    placeholder="Form title "
                  ></input>
                </div>
                <div className=" w-full flex justify-center items-center">
                  <input
                    htmlFor="description"
                    value={Form.description ? Form.description : ""}
                    onChange={(e) => onInputChange(e)}
                    type="text"
                    id="description"
                    className=" border-[#CDD2F2] border rounded-lg bg-white h-10 w-5/6  flex  text-xl    pt-5  py-5 px-2  text-slate-600 font-medium focus:outline-none   "
                    name="description"
                    placeholder="Form description"
                  ></input>
                </div>
              </div>
            </div>
            {form?.fields.length > 0 &&
              form?.fields.map((field, index) => (
                <Field key={field._id} field={field} index={index} />
              ))}
            <button
              className=" items-center rounded flex justify-center  border-2  bg-[#3366FF] h-10  text-white  focus:outline-none w-28 "
              type="submit"
              onClick={() => dispatch(updateForm(formId, Form))}
            >
              <span className="  font-bold text-base">Update </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
