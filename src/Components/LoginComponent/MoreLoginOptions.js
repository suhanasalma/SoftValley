import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const MoreLoginOptions = () => {
   return (
     <div className="flex items-center justify-center text-2xl my-10">
       <div className="p-2 border-2 border-slate-300 rounded-full mr-4 text-blue-700">
         <FaFacebookF />
       </div>
       <div className="border-2 p-2 border-slate-300 rounded-full mr-4">
         <FcGoogle />
       </div>
       <div className="border-2 text-blue-700 p-2 border-slate-300 rounded-full mr-4">
         <FaLinkedinIn />
       </div>
     </div>
   );
};

export default MoreLoginOptions;