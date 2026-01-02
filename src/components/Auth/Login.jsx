/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";

const Login = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    props.handleLogin(email,password);
    
    
    setemail('');
    setpassword('');

    console.log("Hello! login form submitted");
  };


  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className=" border-white border opacity-80 rounded-lg p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}

          onKeyDown={(e)=>{(e.key=='Enter' && (email && password))? submitHandler(e):''}}

          className="flex-col flex items-center justify-center gap-3"
        >
          <div className="flex  flex-col items-start gap-2 justify-center">
            <input
              value={email}
              onChange={(e) => {
                console.log("Changing");
                setemail(e.target.value);
              }}
              required
              id="email"
              className="text-lg  outline-none rounded-full border bg-transparent placeholder:text-gray-400 border-emerald-600 py-2 px-5"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col items-start  gap-2 justify-center">
            {/* <label htmlFor="email" className='font-light text-lg'>Password : </label> */}
            <input
              value={password}
              onChange={(e) => {
                console.log("Password Created");
                setpassword(e.target.value);
              }}
              required
              type="password"
              className="text-lg  outline-none rounded-full border bg-transparent placeholder:text-gray-400 border-emerald-600 py-2 px-5"
              placeholder="Enter your password"
            />
          </div>
          <button className="text-white text-lg mt-5 bg-emerald-700 outline-none px-5 py-2 rounded-full w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
Login.propTypes = {
  handleLogin: PropTypes.func.isRequired
};


export default Login;
