import React from 'react';
import image from "../../Assests/1.jpg";
import './sideBarStyle.css'


const LoginSideBar = () => {
  
   return (
     <div className="sideBar hidden lg:block bg ">
       <div className='flex flex-col justify-center items-center h-full text-white font-bold'>
         <h1 className='text-5xl'>Hello, User</h1>
         <p>Enter your information to be a part with us</p>
         <button className='border-2 w-60 rounded-full p-2 mt-10 font-extrabold text-lg'>SIGN UP</button>
       </div>
     </div>
   );
};

export default LoginSideBar;