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
        <h1 className="font-sans font-bold text-2xl">Create Account</h1>

        <span className="font-sans text-xs text-slate-400">
          or use your email for registration
        </span>
        <input
          className="bg-[#fafafa] text-slate-400 border-none !h-12 py-3 px-4 my-2 w-full rounded-xl"
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="bg-[#fafafa] text-slate-400 border-none !h-12 py-3 px-4 my-2 w-full rounded-xl"
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className="bg-[#fafafa] text-slate-400 border-none !h-12 py-3 px-4 my-2 w-full rounded-xl"
          type="text"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-full font-medium font-sans bg-yellow-400/90 text-white py-2 px-4 rounded-xl  my-2"
        >
          Sign Up
        </button>
        <p className="text-xs font-sans text-slate-400">
          have an account?
          <span
            className="text-xs font-medium text-[#0a9b90] hover:underline cursor-pointer"
            onClick={() => handleOnClick("login")}
          >
            SignIn
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
