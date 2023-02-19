import React, { useState } from "react";
import { VscThreeBars, VscChromeClose, VscMove } from "react-icons/vsc";

const Header = ({ open, setOpen }) => {
  return (
    <div className="flex justify-between items-center flex-1 px-10 py-2">
      <div className="lg:block hidden">
        <h1 className="font-bold">Leads</h1>
        <p className="text-sm text-slate-600">
          Difficulties increase the nearer we get to the goal
        </p>
      </div>
      <button
        onClick={() => setOpen((prevMobileOpen) => !prevMobileOpen)}
        className="lg:hidden"
      >
        {open ? <VscChromeClose /> : <VscThreeBars />}
      </button>
      <div className="flex items-center gap-5">
        <VscMove className='text-xl cursor-pointer'/>
        <img
          className="w-10"
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
