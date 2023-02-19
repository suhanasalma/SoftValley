import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Dashboard/Header";
import Sidebar from "../Components/Dashboard/Sidebar";

const Main = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex ">
      <Sidebar open={open} />
      <div className="flex-1 md:w-1/2">
        <Header open={open} setOpen={setOpen} />

        <Outlet />
      </div>
    </div>
  );
};

export default Main;
