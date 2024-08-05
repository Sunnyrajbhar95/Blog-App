import React, { useState } from "react";
import validate from "../utilities/Validation";
import { app } from "../utilities/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {useNavigate } from "react-router-dom";

const auth = getAuth(app);

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showError, setShowError] = useState(false);
  const [error, setError] = useState(null);
  const [isSignup, setSignup] = useState(false);

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate(data.email, data.password);
    if (validationError === true) {
      setShowError(false);
      try {
        if (isSignup) {
          await createUserWithEmailAndPassword(auth, data.email, data.password);
          navigate('/body');
          console.log("SignUp successfully");
        } else {
          await signInWithEmailAndPassword(auth, data.email, data.password);
          console.log("Login successfully");
          navigate('/body');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setShowError(true);
      setError(validationError);
    }
  };

  return (
    <div className="w-full h-full bg-[#ded9ee] flex justify-center items-center ">
      <form className="w-96 h-auto flex flex-col gap-4 bg-slate-400 p-10 rounded-md items-center">
        <p className="text-lg font-serif">{!isSignup ? "Login" : "Register"}</p>
        {isSignup && (
          <input
            className="w-[100%] p-2 outline-none rounded-sm"
            type="text"
            placeholder="Enter your name"
            onChange={handleChange}
            value={data.name}
            name="name"
          />
        )}
        <input
          className="w-[100%] p-2 outline-none rounded-sm"
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={data.email}
          name="email"
        />
        <input
          className="w-[100%] p-2 outline-none rounded-sm"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={data.password}
          name="password"
        />
        {showError && <p>{error}</p>}
        <button
          className="bg-lime-400 p-2 outline-none rounded-sm w-[100%]"
          onClick={handleSubmit}
        >
          {!isSignup ? "Login" : "SignUp"}
        </button>
        <p className="text-lg font-serif" onClick={() => setSignup(!isSignup)}>
          {isSignup ? "Already Registered? SignIn" : "Not Registered? SignUp"}
        </p>
      </form>
    </div>
  );
}

export default Login;
