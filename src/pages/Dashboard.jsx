import React, { useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="w-full ">
      <Navbar />
      <div className="max-w-[1240px]  px-4 py-10 flex flex-col mx-auto h-full items-start justify-start">
        <h1 className="text-secondary text-4xl font-bold">Welcome Sujan,</h1>
        <div className="flex w-full justify-between items-center mt-10">
          <p className="font-bold ">Your Projects</p>
        </div>
        <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card />
          <Card />
          <div className="h-[200px] flex flex-col justify-center items-center p-4 overflow-hidden shadow-md border cursor-pointer">
            <h1 className="font-bold text-xl hover:text-secondary">
              Add Project +
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
