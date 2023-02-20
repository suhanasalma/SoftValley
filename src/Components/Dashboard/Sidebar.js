import React from "react";
import { FaUserPlus } from "react-icons/fa";
import {
  FaMicrosoft,
  FaUserCog,
  FaUsers,
  FaMoneyCheckAlt,
  FaBuromobelexperte,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ open }) => {
  const menus = [
    {
      name: "DashBoard",
      icon: <FaMicrosoft />,
      to: "/",
    },
    {
      name: "Leads",
      icon: <FaUserCog />,
      to: "/dashboard",
    },
    {
      name: "Customer",
      icon: <FaUsers />,
      to: "/",
    },
    {
      name: "Sales",
      icon: <FaMoneyCheckAlt />,
      to: "/",
    },
    {
      name: "Expense",
      icon: <FaBuromobelexperte />,
      to: "/",
    },
  ];
  return (
    <div
      className={` min-h-screen w-42 border-r-2  ${
        open ? "inline" : "hidden"
      } lg:inline text-gray-600 `}
    >
      <div className="p-2">
        <h1 className="text-3xl font-bold mb-5  text-orange-500">Soft <span className="text-[#405189]">Valley</span> </h1>
        <div className="flex items-center gap-5">
          <div className="bg-slate-200 p-2 rounded-full">
            <FaUserPlus />
          </div>
          <p>Hello! Good Evening Admin</p>
        </div>
      </div>
      <hr className="bg-slate-400 h-[2px] my-5" />
      {menus.map((menu, i) => (
        <NavLink
          key={i}
          to={menu?.to}
          className={({ isActive }) =>
            isActive
              ? "bg-[#405189] p-2 text-white mb-5 flex items-center gap-5 w-full"
              : "flex items-center gap-5 mb-5 p-2"
          }
        >
          {menu.icon}
          <p>{menu?.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
