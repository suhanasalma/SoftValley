import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMail, HiEye } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../Redux/Auth/AuthApi";
import Error from "../Error/Error";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [login, { data, error, isLoading, isError }] = useLoginMutation();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    login(data);
  };

  useEffect(() => {
    if (data?.data?.token) {
      navigate("/dashboard");
    }
  }, [navigate, data?.data?.token]);

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="mx-auto mt-8 mb-0 max-w-md space-y-4"
    >
      <div>
        <div className="relative">
          <input
            {...register("email", { required: true })}
            type="email"
            className="w-full rounded-lg bg-slate-100 p-4 pr-12 text-md outline-[#405189]"
            placeholder="Enter email"
          />
          <span className="absolute inset-y-0 right-4 inline-flex items-center">
            <HiOutlineMail className="text-slate-400" />
          </span>
        </div>
        {errors.email && (
          <p role="alert" className="text-red-500 text-sm text-start ">
            This field is required
          </p>
        )}
      </div>

      <div>
        <div className="relative">
          <input
            {...register("password", { required: true })}
            type="password"
            className="w-full rounded-lg bg-slate-100 p-4 pr-12 text-md shadow-sm outline-[#405189]"
            placeholder="Enter password"
          />

          <span className="absolute inset-y-0 right-4 inline-flex items-center">
            <HiEye className="text-slate-400" />
          </span>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm text-start  ">
            This field is required
          </p>
        )}
      </div>
      {isError && <Error message={error?.data?.message} />}

      <div className="items-center ">
        <p className="text-sm text-gray-500">
          <Link href="#" className="underline">
            Forget your password
          </Link>
        </p>
      </div>
      <button
        disabled={isLoading}
        type="submit"
        className="ml-3 inline-block rounded-full bg-[#405189] p-2 font-extrabold text-lg text-white w-1/2"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
