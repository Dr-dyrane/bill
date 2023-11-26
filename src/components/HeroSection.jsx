// HeroSection.jsx
import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const HeroSection = ({ scrollToForm }) => {
  return (
    <div className="min-h-screen text-center p-4 bg-blue-800 text-white flex items-end justify-start flex-col z-40">
      <div className="h-72 w-72 border border-solid border-blue-700 rounded-2xl mt-20 animate-pulse hover:animate-none bg-blue-700">
        <div className="h-64 w-64 border border-solid border-blue-600 rounded-2xl bg-blue-600">
          <div className="h-60 w-60 border border-solid border-blue-500 rounded-2xl bg-blue-500">
            <div className="h-56 w-56 border border-solid border-blue-400 rounded-2xl bg-blue-400">
              <div className="h-52 w-52 border border-solid border-blue-300 rounded-2xl bg-blue-300">
                <img
                  src="/bill_d.png"
                  alt="Your Logo"
                  className="h-48 rounded-2xl bg-blue-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-5xl font-black my-4 text-end">
        Welcome to{" "}
        <span className="underline decoration-8 decoration-blue-500 text-blue-200 hover:animate-pulse">
          Dyrane's
        </span>{" "}
        Invoice App
      </h1>
      <p className="text-base font-bold text-end italic bg-blue-500 p-4 rounded-xl text-slate-50">
	  Your one-stop solution for creating and managing beautiful invoices.
      </p>
      <FaAngleDoubleDown
        size={96}
        className="mt-20 animate-bounce hover:text-blue-300 cursor-pointer"
        onClick={scrollToForm}
      />
    </div>
  );
};

export default HeroSection;
