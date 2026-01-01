import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-pink-100 flex justify-center items-center select-none">
        <div className="w-150 mt-10  h-auto bg-pink-200 pb-5 rounded-xl shadow-xl">
          <form className="p-8 flex flex-col gap-5 " onSubmit={handleSubmit}>
            <h2 className="text-4xl font-bold  text-white flex flex-col ">
              Login
              <hr className="w-10  h-1 rounded-2xl bg-pink-500 border-none " />
            </h2>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-0"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-0"
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="enter your password"
                required
              />
            </div>

            <div className="w-full flex justify-center mt-5">
              <button
                type="submit"
                className="rounded-lg px-6 font-medium text-lg py-2 w-full bg-pink-500 text-white hover:bg-pink-600 cursor-pointer transition-all"
              >
                Login
              </button>
            </div>
            <div className="flex justify-between">
              <h1 className="flex gap-1">
                Don't have account?
              <span>
                  <Link
                  to="/singUp"
                  className="text-pink-400 underline hover:text-pink-600"
                >
                  Sing Up
                </Link>
              </span>
              </h1>
              <h1 className="text-pink-400 underline hover:text-pink-600 cursor-pointer ">
                Forgett password
              </h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
