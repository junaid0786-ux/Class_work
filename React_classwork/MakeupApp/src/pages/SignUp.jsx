import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    skills: [],
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "skills") {
      const updatedSkills = checked
        ? [...formData.skills, value]
        : formData.skills.filter((skill) => skill !== value);
      setFormData((prevData) => ({ ...prevData, [name]: updatedSkills }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      skills: [],
    });
  };

  return (
    <>
      <div className="w-full h-full bg-pink-100 flex justify-center items-center select-none">
        <div className="w-150 mt-30 mb-20  h-auto bg-pink-200 pb-5 rounded-xl shadow-xl">
          <form className="p-6 flex flex-col gap-5 " onSubmit={handleSubmit}>
            <h2 className="text-4xl font-bold  text-white flex flex-col ">
              Sing Up
              <hr className="w-13  h-1 rounded-2xl bg-pink-500 border-none " />
            </h2>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-0"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>
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
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="phone">
                Phone
              </label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-0"
                type="number"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="enter phone number"
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
              />
            </div>
            <div>
              <label
                className="block text-gray-700 mb-1"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-0"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="confirm your password"
              />
            </div>

            <div className="w-full flex justify-center mt-5">
              <button
                type="submit"
                className="rounded-lg px-6 font-medium text-lg py-2 w-full bg-pink-500 text-white hover:bg-pink-600 cursor-pointer transition-all"
              >
                Sing Up
              </button>
            </div>
            <div className="flex justify-between ">
              <div>
                <h1>
                  Already have account !{" "}
                  <span>
                    <Link
                      to="/login"
                      className="text-pink-400 underline hover:text-pink-600"
                    >
                      Login
                    </Link>
                  </span>
                </h1>
              </div>
              <span>
                <Link
                  to="/register"
                  className="text-pink-400 underline hover:text-pink-600"
                >
                  Register here
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
