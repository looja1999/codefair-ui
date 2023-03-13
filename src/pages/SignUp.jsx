import React from "react";
import Navbar from "../components/Navbar";

const SignUp = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="max-w-[600px] flex flex-col mx-auto h-screen mt-[-60px] items-center justify-center">
        <h1 className="text-2xl text-[#056571] p-6 md:p-4 w-[100%] text-center font-semibold capitalize">
          Registration
        </h1>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 px-2">
          <input
            className="w-full p-4 border border-gray-[700] md:mt-4 rounded-md"
            placeholder="First name"
          />
          <input
            className="w-full p-4 border border-gray-[700] mt-3 md:mt-4 rounded-md"
            placeholder="Last name"
          />
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 px-2 mt-3 md:mt-0">
          <input
            className="w-full p-4 border border-gray-[700] md:mt-4 rounded-md"
            placeholder="Email"
          />
          <input
            className="w-full p-4 border border-gray-[700] mt-3 md:mt-4 rounded-md"
            placeholder="Confirm email"
          />
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 px-2 mt-3 md:mt-0">
          <input
            className="w-full p-4 border border-gray-[700] md:mt-4 rounded-md"
            placeholder="Password"
          />
          <input
            className="w-full p-4 border border-gray-[700] mt-3 md:mt-4 rounded-md"
            placeholder="Confirm Password"
          />
        </div>
        <div className="w-full px-2 mt-3 md:mt-0">
          <button className="bg-[#056571] text-white border-2 hover:border-[#056571] font-bold w-full rounded-md hover:bg-white p-4 mt-4 hover:text-[#056571]">
            Sign up
          </button>
        </div>
        <div className="fixed bottom-0 w-full h-auto p-4 flex flex-col justify-center items-center border-t border-b-gray-500">
          <p className="text-[#056571] md:p-0 font-bold  hover:text-[#05647178] cursor-pointer">
            Already have an account? Sign in
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
