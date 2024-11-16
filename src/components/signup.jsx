import React from "react";
function SignUpForm({ handleOnClick, type }) {
  const [state, setState] = React.useState({
    name: "",
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

    const { name, email, password } = state;
    alert(
      `You are sign up with name: ${name} email: ${email} and password: ${password}`
    );

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div
      className={`absolute top-0 right-0 lg:w-1/2 w-full h-full opacity-1 z-10 transition-all duration-600 ease-in-out ${
        type !== "login" ? "z-20" : ""
      }`}
    >
      <form
        onSubmit={handleOnSubmit}
        className="bg-white flex items-center justify-center flex-col px-12 py-0 h-full text-center"
      >
        <h1>Create Account</h1>
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
        <span>or use your email for registration</span>
        <input
          className="bg-gray-200 border-none py-3 px-4 my-2 w-full"
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="bg-gray-200 border-none py-3 px-4 my-2 w-full"
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="bg-gray-200 border-none py-3 px-4 my-2 w-full"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Sign Up</button>
        <p onClick={() => handleOnClick("login")}>signIn</p>
      </form>
    </div>
  );
}

export default SignUpForm;
