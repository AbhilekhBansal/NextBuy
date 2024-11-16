import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function SignInForm({ handleOnClick, type }) {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are logging in with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div
      className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-full lg:w-1/2 ${
        type === "login" ? "z-20" : ""
      }`}
    >
      <form
        onSubmit={handleOnSubmit}
        className="bg-white flex items-center justify-center flex-col px-12 py-0 h-full text-center"
      >
        <h1 className="font-sans font-bold text-3xl">Welcome Back</h1>
        <span className="font-sans text-xs text-slate-400">
          Please Login to your account
        </span>
        <input
          type="email"
          className="bg-[#fafafa] text-slate-400 border-none !h-12 py-3 px-4 my-2 w-full rounded-xl"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <div className="relative w-full">
          <input
            className="bg-[#fafafa] text-slate-400 border-none !h-12 py-2 px-4 my-2 w-full rounded-xl"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <a
          href="#"
          className="text-[8px] text-slate-400 w-full hover:underline my-2 block text-right px-1 "
        >
          Forgot your password?
        </a>
        <button
          type="submit"
          className="w-full font-medium font-sans bg-yellow-400/90 text-white py-2 px-4 rounded-xl  my-2"
        >
          Sign In
        </button>
        {/* Divider with text */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-slate-500 w-8"></div>
          <span className="px-1 font-sans text-[10px] text-gray-500">
            Or Login with
          </span>
          <div className="flex-grow border-t border-slate-500 w-8"></div>
        </div>
        {/* Social login buttons can go here */}
        <div className="flex space-x-4 font-sans">
          <button className=" flex items-center gap-2 text-xs text-black font-medium border-[1.3px] border-slate-400 px-4 py-2 rounded-sm">
            <FcGoogle /> Google
          </button>
          {/* <button className="text-sm text-black font-medium border-[1.5px]  px-4 py-2 rounded-sm">
            Facebook
          </button> */}
        </div>
        <p className="text-xs font-sans text-slate-400">
          Don't have an account?
          <span
            className="text-xs font-medium text-[#0a9b90] hover:underline cursor-pointer"
            onClick={() => handleOnClick("signUp")}
          >
            SignUp
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignInForm;
