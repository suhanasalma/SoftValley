import React from "react";
import LoginForm from "../../Components/LoginComponent/LoginForm";
import LoginSideBar from "../../Components/LoginComponent/LoginSideBar";
import MoreLoginOptions from "../../Components/LoginComponent/MoreLoginOptions";

const Login = () => {
  return (
    <section className="bg-[#405189] h-screen ">
      <section className="flex  justify-center items-center xl:w-9/12 w-11/12 mx-auto h-full ">
        <div className="px-4 py-12  sm:px-6 sm:py-16 w-full md:w-5/6 lg:px-8 lg:py-24  bg-white h-[600px]">
  
          <div className="">
            <h1 className=" font-bold text-3xl text-[#405189]">
              Sign in to Soft Valley
            </h1>

            <MoreLoginOptions />
          </div>

          <LoginForm />
        </div>

        <LoginSideBar />
      </section>
    </section>
  );
};

export default Login;
