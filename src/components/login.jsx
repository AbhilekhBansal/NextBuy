import React from "react";
function SignInForm({ handleOnClick, type }) {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    // z-20
    <div
      className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-full lg:w-1/2 ${
        type === "login" ? "z-20" : ""
      }`}
    >
      <form
        onSubmit={handleOnSubmit}
        className="bg-white flex items-center justify-center flex-col px-12 py-0 h-full text-center"
      >
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          className="bg-gray-200 border-none py-3 px-4 my-2 w-full"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          className="bg-gray-200 border-none py-3 px-4 my-2 w-full"
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
        <p onClick={() => handleOnClick("signUp")}>SignUp</p>
      </form>
    </div>
  );
}

export default SignInForm;
