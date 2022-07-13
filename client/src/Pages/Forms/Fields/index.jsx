import React, { useState, useEffect, Fragment } from "react";
import checkboxes2 from "../../../images/checkboxes2.svg";
import { useDispatch, useSelector } from "react-redux";
import delet from "../../../images/trash.svg";
import add from "../../../images/add.svg";
import copy from "../../../images/copyy.svg";
import { Switch } from "@headlessui/react";
import { useParams } from "react-router-dom";
import {
  deleteField,
  removeOptionFromField,
  addOptionToField,
  updateField,
  getFields,
} from "../../../Redux/actions/fields.actions";

const Field = ({ field, index }) => {
  const { formId } = useParams();
  const dispatch = useDispatch();
  const [enabled, setEnabled] = useState(false);
  const { form } = useSelector((state) => state.formReducers);
  const [value, setValue] = useState(field?.value);
  const [title, setTitle] = useState(field?.title);
  const [options, setOptions] = useState(field?.options ? field.options : []);

  const onChangeOption = (e, index) => {
    const neOptions = options;
    neOptions[index] = e.target.value;
    setOptions([...neOptions]);
  };

  const renderSwitch = (type) => {
    switch (type) {
      case "E-mail":
        return (
          <div
            className="flex flex-col gap-4 border-[#CDD2F2]  border border-l-8 border-l-[#3366FF] mt-12 p-6 w-8/12 h-fit rounded-lg bg-white"
            key={field?._id}
          >
            <div className="flex flex-row gap-4 items-center pt-5  ">
              <span class="material-symbols-outlined text-[#232A58] ">
                alternate_email
              </span>
              <h1 className="text-xl flex  font-bold   text-[#232A58] ">
                {" "}
                E-mail
              </h1>
            </div>
            <input
              htmlFor="title"
              value={title}
              id="title"
              className="border-[#CDD2F2] border h-10  text-xl py-7 px-5 w-11/12  text-slate-600 font-medium focus:outline-none  rounded-lg bg-white  "
              type="text"
              name="title"
              placeholder="Example@website.com"
            ></input>

            <div className="flex items-center w-full gap-4 ">
              <input
                htmlFor="type"
                readOnly
                id="type"
                className=" border-[#CDD2F2] border  bg-[#E8E9ED] h-2 w-full text-xl py-7 px-5  text-slate-600 font-medium focus:outline-none rounded-lg "
                type="text"
                name="type"
                placeholder="E-mail answer from user "
              ></input>
            </div>

            <div className=" flex items-center gap-8 border-t border-solid border-[#CDD2F2] w-full py-4">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-blue-900" : "bg-blue-700"}
            relative inline-flex h-[21px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${
                    enabled ? "translate-x-[18px]" : "translate-x-0"
                  }
              pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>

              <div className=" bg-[#CDD2F2] h-5 w-[1px]"></div>

              <span
                className="material-symbols-outlined text-[#8F93AB] font-bold"
                onClick={() => dispatch(updateField(formId, field._id))}
              >
                published_with_changes
              </span>
              <div className=" bg-[#CDD2F2] h-5 w-[1px]"></div>

              <span
                className="cursor-pointer material-symbols-outlined text-[#8F93AB] font-bold "
                onClick={() => dispatch(deleteField(formId, field._id))}
              >
                delete
              </span>
            </div>
          </div>
        );
      case "Short Answer":
        return (
          <div
            className="flex flex-col gap-4 border-[#CDD2F2] border  mt-12 p-6 w-8/12 h-fit rounded-lg bg-white"
            key={field?._id}
          >
            <div className="flex flex-row gap-4 items-center pt-5  ">
              <span className="material-symbols-outlined text-[#232A58] text-4xl">
                short_text
              </span>
              <h1 className="text-xl flex  font-bold   text-[#232A58] ">
                {" "}
                Short Answer
              </h1>
            </div>
            <input
              htmlFor="title"
              value={field?.title}
              id="title"
              className="border-[#CDD2F2] border h-10  text-xl py-7 px-5 w-11/12  text-slate-600 font-medium focus:outline-none  rounded-lg bg-white  "
              type="text"
              name="title"
              placeholder="Explain this or that in a short sentence"
            ></input>

            <div className="flex items-center w-full gap-4 ">
              <input
                htmlFor="type"
                value={field?.options}
                id="type"
                className=" border-[#CDD2F2] border  bg-[#E8E9ED] h-2 w-full text-xl py-7 px-5  text-slate-600 font-medium focus:outline-none rounded-lg "
                type="type"
                name="type"
                placeholder="Short text answer from user "
              ></input>
            </div>

            <div className=" flex items-center gap-8 border-t border-solid border-[#CDD2F2] w-full py-4">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-blue-900" : "bg-blue-700"}
            relative inline-flex h-[21px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${
                    enabled ? "translate-x-[18px]" : "translate-x-0"
                  }
              pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>

              <div className=" bg-[#CDD2F2] h-5 w-[1px]"></div>
              <img src={copy} alt="" />
              <div className=" bg-[#CDD2F2] h-5 w-[1px]"></div>

              <img
                className=" cursor-pointer"
                onClick={() =>
                  dispatch(deleteField(formId, field._id), getFields)
                }
                src={delet}
                alt=""
              />
            </div>
          </div>
        );
      case "CheckBox":
        return (
          <div
            className="flex flex-col gap-4 border-[#CDD2F2] border border-l-8 border-l-[#3366FF]  mt-12 p-6 w-8/12 h-fit rounded-lg bg-white"
            key={field?._id}
          >
            <div className="flex flex-row gap-4 items-center pt-5  ">
              <img src={checkboxes2} alt="" />{" "}
              <h1 className="text-xl flex  font-bold  pr-48 text-[#232A58] ">
                {" "}
                Checkboxes
              </h1>
            </div>
            <input
              onChange={(e) => setTitle(e.target.value)}
              htmlFor="title"
              value={title}
              id="title"
              className="border-[#CDD2F2] border h-10  text-xl py-7 px-5 w-11/12  text-slate-600 font-medium focus:outline-none  rounded-lg bg-white  "
              type="text"
              name="title"
              placeholder="Checkboxes title "
            ></input>
            {options.length > 0 &&
              options.map((option, opidx) => (
                <div className="flex items-center w-full gap-4 ">
                  <div className="mt-1">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-6 w-6"
                      />
                      <span className="ml-3 text-lg"> </span>
                    </label>
                  </div>
                  <input
                    htmlFor="value"
                    onChange={(e) => onChangeOption(e, opidx)}
                    value={options[opidx]}
                    id="value"
                    className=" border-[#CDD2F2] border  bg-white h-2 w-full text-xl py-7 px-5  text-slate-600 font-medium focus:outline-none rounded-lg "
                    type="type"
                    name="type"
                    placeholder="this is a option i typed. "
                  ></input>
                  <div className=" ">
                    {" "}
                    <img
                      className=" cursor-pointer"
                      src={delet}
                      alt=""
                      onClick={() => {
                        const newOptions = options;
                        const arr = newOptions.filter((_, i) => i !== opidx);
                        setOptions([...arr]);
                      }}
                    />
                  </div>
                </div>
              ))}
            <div className="flex justify-start gap-4 items-center">
              <img src={add} alt="" />
              <button
                className=" items-center rounded flex justify-start   bg-white h-14 text-[#3366FF] focus:outline-none w-32"
                type="submit"
              >
                <span
                  className="  font-extrabold text-base "
                  onClick={() => setOptions([...options, ""])}
                >
                  ADD OPTION
                </span>
              </button>
            </div>
            <div className=" flex items-center gap-8 border-t border-solid border-[#CDD2F2] w-full py-4">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-blue-900" : "bg-blue-700"}
            relative inline-flex h-[21px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${
                    enabled ? "translate-x-[18px]" : "translate-x-0"
                  }
              pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
              <div className=" bg-[#CDD2F2] h-5 w-[1px]"></div>
              <span
                className=" cursor-pointer  material-symbols-outlined text-[#8F93AB] font-bold"
                onClick={() =>
                  dispatch(
                    updateField(formId, field._id, {
                      options: options,
                      title: title,
                    })
                  )
                }
              >
                published_with_changes
              </span>
              <div className=" bg-[#CDD2F2] h-5 w-[1px]"></div>
              <img
                className="cursor-pointer"
                onClick={() => dispatch(deleteField(formId, field._id, index))}
                src={delet}
                alt=""
              />
            </div>
          </div>
        );
      case "Paragraph":
        return (
          <div
            className="flex flex-col gap-4 border-[#CDD2F2] border  mt-12 p-6 w-8/12 h-fit rounded-lg bg-white"
            key={field?._id}
          >
            <div className="flex flex-row gap-4 items-center pt-5  ">
              <span className="material-symbols-outlined text-[#232A58] text-4xl ">
                subject
              </span>
              <h1 className="text-xl flex  font-bold   text-[#232A58] ">
                {" "}
                Paragraph
              </h1>
            </div>
            <input
              htmlFor="title"
              value={field?.title}
              id="title"
              className="border-[#CDD2F2] border h-10  text-xl py-7 px-5 w-11/12  text-slate-600 font-medium focus:outline-none  rounded-lg bg-white  "
              type="text"
              name="title"
              placeholder="Paragraph title"
            ></input>

            <div className="flex items-center w-full gap-4 ">
              <input
                htmlFor="type"
                value={field?.options}
                id="type"
                className=" border-[#CDD2F2] border  bg-[#E8E9ED] h-2 w-full text-xl py-7 px-5  text-slate-600 font-medium focus:outline-none rounded-lg "
                type="type"
                name="type"
                placeholder="Paragraph text answer from user "
              ></input>
            </div>

            <div className=" flex items-center gap-8 border-t border-solid border-[#CDD2F2] w-full py-4">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-blue-900" : "bg-blue-700"}
            relative inline-flex h-[21px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${
                    enabled ? "translate-x-[18px]" : "translate-x-0"
                  }
              pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>

              <div className=" bg-[#CDD2F2] h-5 w-[1px]"></div>
              <img src={copy} alt="" />
              <div className=" bg-[#CDD2F2] h-5 w-[1px]"></div>

              <img
                className=" cursor-pointer"
                onClick={() => dispatch(deleteField(formId, field._id))}
                src={delet}
                alt=""
              />
            </div>
          </div>
        );
      case "DropDown":
        return (
          <div
            className="flex flex-col gap-4 border-[#CDD2F2] border  mt-12 p-6 w-8/12 h-fit rounded-lg bg-white"
            key={field?._id}
          >
            <div className="flex flex-row gap-4 items-center pt-5  ">
              <span class="material-symbols-outlined text-[#232A58] text-4xl ">
                arrow_drop_down_circle
              </span>
              <h1 className="text-xl flex  font-bold   text-[#232A58] ">
                {" "}
                DropDown
              </h1>
            </div>
            <input
              onChange={(e) => setTitle(e.target.value)}
              htmlFor="title"
              value={title}
              id="title"
              className="border-[#CDD2F2] border h-10  text-xl py-7 px-5 w-11/12  text-slate-600 font-medium focus:outline-none  rounded-lg bg-white  "
              type="text"
              name="title"
              placeholder="Dropdown Title "
            ></input>

            <div className="flex items-center w-full gap-4 ">
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-6 w-6" />
                  <span className="ml-3 text-lg"> </span>
                </label>
              </div>

              <input
                htmlFor="type"
                value={field?.options}
                id="type"
                className=" border-[#CDD2F2] border  bg-white h-2 w-full text-xl py-7 px-5  text-slate-600 font-medium focus:outline-none rounded-lg "
                type="type"
                name="type"
                placeholder="Dropdown option 1  "
              ></input>

              <div className=" ">
                {" "}
                <img
                  className=" cursor-pointer"
                  src={delet}
                  alt=""
                  onClick={() =>
                    dispatch(removeOptionFromField(formId, field._id, options))
                  }
                />
              </div>
            </div>

            {/* <div className="flex flex-row  items-center w-full gap-5 mt-5 ml-28">
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-6 w-6" />
                  <span className="ml-3 text-lg"></span>
                </label>
              </div>
              <div className="  ">
                <input
                  id="title"
                  className=" border-[#EAEBEF] border  bg-white h-2 w-[500px] text-xl py-7 px-5  text-black font-medium focus:outline-none   mb-1 rounded-lg "
                  type="title"
                  name="title"
                  placeholder="this is a option i typed. "
                ></input>
              </div>
              <div className="mr-2 ">
                {" "}
                <img className=" cursor-pointer" src={delet} alt="" />
              </div>
            </div> */}

            <div className="flex justify-start gap-4 items-center">
              <img src={add} alt="" />
              <button
                className=" items-center rounded flex justify-start   bg-white h-14 text-[#3366FF] focus:outline-none w-32"
                type="submit"
              >
                <span
                  className="  font-extrabold text-base "
                  onClick={() => dispatch(addOptionToField(formId, field._id))}
                >
                  ADD OPTION
                </span>
              </button>
            </div>

            <div className=" flex items-center gap-8 border-t border-solid border-[#CDD2F2] w-full py-4">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-blue-900" : "bg-blue-700"}
            relative inline-flex h-[21px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${
                    enabled ? "translate-x-[18px]" : "translate-x-0"
                  }
              pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>

              <div className=" bg-[#CDD2F2] h-5 w-[1px]"></div>
              <img src={copy} alt="" />
              <div className=" bg-[#CDD2F2] h-5 w-[1px]"></div>

              <img
                className=" cursor-pointer"
                onClick={() => dispatch(deleteField(formId, field._id))}
                src={delet}
                alt=""
              />
            </div>
          </div>
        );
      case "FileUpload":
        return (
          <div
            className="flex flex-col gap-4 border-[#CDD2F2] border  mt-12 p-6 w-8/12 h-fit rounded-lg bg-white"
            key={field?._id}
          >
            <div className="flex flex-row gap-4 items-center pt-5  ">
              <span class="material-symbols-outlined text-[#232A58] text-4xl ">
                cloud_upload
              </span>
              <h1 className="text-xl flex  font-bold  pr-48 text-[#232A58] ">
                {" "}
                FileUpload
              </h1>
            </div>
            <input
              htmlFor="title"
              value={field?.title}
              id="title"
              className="border-[#CDD2F2] border h-10  text-xl py-7 px-5 w-11/12  text-slate-600 font-medium focus:outline-none  rounded-lg bg-white  "
              type="text"
              name="title"
              placeholder="File Upload title "
            ></input>

            {/* <div className="flex items-center w-full gap-4 ">
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-6 w-6" />
                  <span className="ml-3 text-lg"> </span>
                </label>
              </div>

              <input
                onChange={(e) => onInputChange(e)}
                htmlFor="type"
                value={field?.options}
                id="type"
                className=" border-[#CDD2F2] border  bg-white h-2 w-full text-xl py-7 px-5  text-slate-600 font-medium focus:outline-none rounded-lg "
                type="type"
                name="type"
                placeholder="this is a option i typed. "
              ></input>

              <div className=" ">
                {" "}
                <img
                  className=" cursor-pointer"
                  src={delet}
                  alt=""
                  onClick={() =>
                    dispatch(removeOptionFromField(formId, field._id))
                  }
                />
              </div>
            </div> */}

            {/* <div className="flex flex-row  items-center w-full gap-5 mt-5 ml-28">
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-6 w-6" />
                  <span className="ml-3 text-lg"></span>
                </label>
              </div>
              <div className="  ">
                <input
                  id="title"
                  className=" border-[#EAEBEF] border  bg-white h-2 w-[500px] text-xl py-7 px-5  text-black font-medium focus:outline-none   mb-1 rounded-lg "
                  type="title"
                  name="title"
                  placeholder="this is a option i typed. "
                ></input>
              </div>
              <div className="mr-2 ">
                {" "}
                <img className=" cursor-pointer" src={delet} alt="" />
              </div>
            </div> */}

            {/* <div className="flex justify-start gap-4 items-center">
              <img src={add} alt="" />
              <button
                className=" items-center rounded flex justify-start   bg-white h-14 text-[#3366FF] focus:outline-none w-32"
                type="submit"
              >
                <span
                  className="  font-extrabold text-base "
                  onClick={() => dispatch(addOptionToField(formId, field._id))}
                >
                  ADD OPTION
                </span>
              </button>
            </div> */}

            <div className=" flex items-center gap-8 border-t border-solid border-[#CDD2F2] w-full py-4">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-blue-900" : "bg-blue-700"}
            relative inline-flex h-[21px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${
                    enabled ? "translate-x-[18px]" : "translate-x-0"
                  }
              pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>

              <div className=" bg-[#CDD2F2] h-5 w-[1px]"></div>
              <img src={copy} alt="" />
              <div className=" bg-[#CDD2F2] h-5 w-[1px]"></div>

              <img
                className=" cursor-pointer"
                onClick={() => dispatch(deleteField(formId, field._id, index))}
                src={delet}
                alt=""
              />
            </div>
          </div>
        );
      case "MultipleChoices":
        return (
          <div
            className="flex flex-col gap-4 border-[#CDD2F2] border  mt-12 p-6 w-8/12 h-fit rounded-lg bg-white"
            key={field?._id}
          >
            <div className="flex flex-row gap-4 items-center pt-5  ">
              <span class="material-symbols-outlined text-[#232A58] text-4xl">
                radio_button_checked
              </span>
              <h1 className="text-xl flex  font-bold  pr-48 text-[#232A58] ">
                {" "}
                MultipleChoices
              </h1>
            </div>
            <input
              htmlFor="title"
              value={field?.title}
              id="title"
              className="border-[#CDD2F2] border h-10  text-xl py-7 px-5 w-11/12  text-slate-600 font-medium focus:outline-none  rounded-lg bg-white  "
              type="text"
              name="title"
              placeholder="MultipleChoices title "
            ></input>

            <div className="flex items-center w-full gap-4 ">
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-6 w-6" />
                  <span className="ml-3 text-lg"> </span>
                </label>
              </div>

              <input
                htmlFor="type"
                value={field?.options}
                id="type"
                className=" border-[#CDD2F2] border  bg-white h-2 w-full text-xl py-7 px-5  text-slate-600 font-medium focus:outline-none rounded-lg "
                type="type"
                name="type"
                placeholder="this is a option i typed. "
              ></input>

              <div className=" ">
                {" "}
                <img
                  className=" cursor-pointer"
                  src={delet}
                  alt=""
                  onClick={() =>
                    dispatch(removeOptionFromField(formId, field._id))
                  }
                />
              </div>
            </div>

            {/* <div className="flex flex-row  items-center w-full gap-5 mt-5 ml-28">
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-6 w-6" />
                  <span className="ml-3 text-lg"></span>
                </label>
              </div>
              <div className="  ">
                <input
                  id="title"
                  className=" border-[#EAEBEF] border  bg-white h-2 w-[500px] text-xl py-7 px-5  text-black font-medium focus:outline-none   mb-1 rounded-lg "
                  type="title"
                  name="title"
                  placeholder="this is a option i typed. "
                ></input>
              </div>
              <div className="mr-2 ">
                {" "}
                <img className=" cursor-pointer" src={delet} alt="" />
              </div>
            </div> */}

            <div className="flex justify-start gap-4 items-center">
              <img src={add} alt="" />
              <button
                className=" items-center rounded flex justify-start   bg-white h-14 text-[#3366FF] focus:outline-none w-32"
                type="submit"
              >
                <span
                  className="  font-extrabold text-base "
                  onClick={() => dispatch(addOptionToField(formId, field._id))}
                >
                  ADD OPTION
                </span>
              </button>
            </div>

            <div className=" flex items-center gap-8 border-t border-solid border-[#CDD2F2] w-full py-4">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-blue-900" : "bg-blue-700"}
            relative inline-flex h-[21px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${
                    enabled ? "translate-x-[18px]" : "translate-x-0"
                  }
              pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>

              <div className=" bg-[#CDD2F2] h-5 w-[1px]"></div>
              <img src={copy} alt="" />
              <div className=" bg-[#CDD2F2] h-5 w-[1px]"></div>

              <img
                className=" cursor-pointer"
                onClick={() => dispatch(deleteField(formId, field._id))}
                src={delet}
                alt=""
              />
            </div>
          </div>
        );
      default:
        return <div></div>;
    }
  };

  //   return (
  //     <div className=" w-full " key={field?._id}>
  //       <div className="flex flex-row gap-4 items-center pt-5  ">
  //         <img src={checkboxes2} alt="" />{" "}
  //         <h1 className="text-xl flex  font-bold  pr-48 text-[#232A58] ">
  //           {" "}
  //           Checkboxes
  //         </h1>
  //       </div>

  //       <input
  //
  //         htmlFor="title"
  //         value={field?.title}
  //         id="title"
  //         className="border-[#EAEBEF] border h-10  text-xl py-7 px-5 w-11/12  text-slate-600 font-medium focus:outline-none  rounded-lg bg-white  "
  //         type="text"
  //         name="title"
  //         placeholder="Checkboxes title "
  //       ></input>

  //       <div className="flex items-center w-full gap-4 ">
  //         <div className="mt-1">
  //           <label className="inline-flex items-center">
  //             <input type="checkbox" className="form-checkbox h-6 w-6" />
  //             <span className="ml-3 text-lg"> </span>
  //           </label>
  //         </div>

  //         <input
  //
  //           htmlFor="type"
  //           value={field?.options}
  //           id="type"
  //           className=" border-[#EAEBEF] border  bg-white h-2 w-full text-xl py-7 px-5  text-slate-600 font-medium focus:outline-none rounded-lg "
  //           type="type"
  //           name="type"
  //           placeholder="this is a option i typed. "
  //         ></input>

  //         <div className=" ">
  //           {" "}
  //           <img
  //             className=" cursor-pointer"
  //             src={delet}
  //             alt=""
  //             onClick={() => dispatch(removeOptionFromField(formId, field._id))}
  //           />
  //         </div>
  //       </div>

  //       <div className="flex flex-row  items-center w-full gap-5 mt-5 ml-28">
  //         <div className="mt-1">
  //           <label className="inline-flex items-center">
  //             <input type="checkbox" className="form-checkbox h-6 w-6" />
  //             <span className="ml-3 text-lg"></span>
  //           </label>
  //         </div>
  //         <div className="  ">
  //           <input
  //             id="title"
  //             className=" border-[#EAEBEF] border  bg-white h-2 w-[500px] text-xl py-7 px-5  text-black font-medium focus:outline-none   mb-1 rounded-lg "
  //             type="title"
  //             name="title"
  //             placeholder="this is a option i typed. "
  //           ></input>
  //         </div>
  //         <div className="mr-2 ">
  //           {" "}
  //           <img className=" cursor-pointer" src={delet} alt="" />
  //         </div>
  //       </div>

  //       <div className="flex justify-start gap-4 items-center">
  //         <img src={add} alt="" />
  //         <button
  //           className=" items-center rounded flex justify-start   bg-white h-14 text-[#3366FF] focus:outline-none w-32"
  //           type="submit"
  //         >
  //           <span
  //             className="  font-extrabold text-base "
  //             onClick={() => dispatch(addOptionToField(formId, field._id))}
  //           >
  //             ADD OPTION
  //           </span>
  //         </button>
  //       </div>

  //       <div className=" flex items-center gap-8 border-t border-solid border-black w-full py-4">
  //         <Switch
  //           checked={enabled}
  //           onChange={setEnabled}
  //           className={`${enabled ? "bg-blue-900" : "bg-blue-700"}
  //           relative inline-flex h-[21px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
  //         >
  //           <span className="sr-only">Use setting</span>
  //           <span
  //             aria-hidden="true"
  //             className={`${enabled ? "translate-x-[18px]" : "translate-x-0"}
  //             pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
  //           />
  //         </Switch>

  //         <div className=" bg-[#80849F] h-5 w-[1px]"></div>
  //         <img src={copy} alt="" />
  //         <div className=" bg-[#80849F] h-5 w-[1px]"></div>

  //         <img
  //           className=" cursor-pointer"
  //           onClick={() => dispatch(deleteField(formId, field._id))}
  //           src={delet}
  //           alt=""
  //         />
  //       </div>
  //     </div>
  //   );
  return <Fragment>{renderSwitch(field?.type)}</Fragment>;
};

export default Field;
