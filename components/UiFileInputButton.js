import React from "react";
import { useState, useRef } from "react";
  
const UiFileInputButton = (props) => {
  const [nam, setNam] = useState("");
  const [fourD, setFourD] = useState("");
  const [designation, setDesignation] = useState("");
  const [fname, setFname] = useState("")
  const [file, setFile] = useState(null);
  const ref = useRef();
  
  const reset = () => {
    ref.current.value = "";
  }

  const submit = (e) =>{
    e.preventDefault()
    if (!nam || !fourD || !designation || !img) {
      alert("No field can be left blank");
    } else {
      const formData = new FormData();
      formData.append(e.target.value, file);
      props.onChange(formData, nam, fourD, designation);
      setNam("");
      setDesignation("");
      setFourD("");
      setFname("");
      setFile(null);
    }
  }
  return (
    <div className="mx-auto bg-gray-100 p-8 rounded-xl w-max">
    <p className="text-3xl text-center font-bold p-3">Add Person</p>
    <form className="w-full max-w-sm" onSubmit={submit} encType="multipart/form-data" >
    <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="nam"
              type="text"
              value={nam}
              onChange={(e) => {
                setNam(e.target.value);
                setFname(Date.now());
              }}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-4d"
            >
              4D
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="4d"
              type="text"
              value={fourD}
              onChange={(e) => {
                setFourD(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-desig"
            >
              Designation
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="designation"
              type="text"
              value={designation}
              onChange={(e) => {
                setDesignation(e.target.value);
              }}
            />
          </div>
        </div>
      <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-img"
            >
              Image
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="img"
              type="file"
              ref={ref}
              onChange={(e)=>{
                setFile(e.target.files[0]);
              }}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <input
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={reset}
              value="Add"
            />
          </div>
        </div>
    </form>
  </div>
  )
};

export default UiFileInputButton;
