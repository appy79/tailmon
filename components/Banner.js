import { useState } from "react";

function Banner() {
    const [showModal, setShowModal] = useState(false);
  return (
    <div className="mx-auto p-8">
    <div className="mx-auto bg-gray-100 p-8 rounded-xl">
        <div className="text-sm text-center">
          <p className="xl:text-8xl md:text-5xl text-center font-bold text-3xl">Welcome to Our Website</p>
          <p className="block text-gray-500 text-xs md:text-xl font-bold xl:text-4xl text-center mb-4 md:mb-0 pr-4"> Learn more about our company and services. </p>
          <div className="text-center m-3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
              type="button" 
              onClick={() => setShowModal(true)}
            >Apply</button>
          </div>
        </div>
    </div>
    {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Thanks!
                  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Thank you for your interest in our company!
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default Banner;