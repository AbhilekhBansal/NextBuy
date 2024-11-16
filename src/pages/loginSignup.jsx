import Login from "@/components/login";
import SignUp from "@/components/signup";
import React, { useState } from "react";

const LoginSignup = () => {
  const [type, setType] = useState("login");
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    " flex mt-20 container bg-white rounded-lg shadow-lg shadow-black/25 relative overflow-hidden w-[768px] max-w-full min-h-[480px] " +
    (type === "signUp" ? "right-panel-active" : "");

  return (
    <div className=" flex justify-center items-center flex-col my-10 bg-white z-1  ">
      <div className={containerClass} id="container">
        <SignUp handleOnClick={setType} type={type} />
        <Login handleOnClick={setType} type={type} />
        <div className="overlay-container  ">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <img
                src="src/assets/loginBanner.jpg"
                className="h-full w-full object-fill rounded-lg"
              />
            </div>
            <div className="overlay-panel overlay-right">
              <img
                src="src/assets/loginBanner.jpg"
                className="h-full w-full object-fill rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
