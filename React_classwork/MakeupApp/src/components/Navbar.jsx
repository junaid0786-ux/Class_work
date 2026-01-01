import React, { use, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="bg-white/40 flex items-center justify-between w-full h-20 shadow fixed z-50 backdrop-blur-md">
          <div className="ml-10  px-3 py-1 ">
            <h1 className="font-extrabold text-pink-500 text-4xl">
              <Link to="/">
                G<span className="font-serif">lowery</span>
              </Link>
            </h1>
          </div>

          <div>
            <ul className="flex items-center gap-6 font-normal text-lg mt-2 ">
              <li>
                <Link
                  to="/"
                  className="hover:text-pink-500  transition-all ease-in"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-pink-500 transition-all ease-in"
                >
                  About
                </a>
              </li>
              <li>
                <Link
                  to="/product"
                  className="hover:text-pink-500 transition-all ease-in"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-pink-500 transition-all ease-in"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex mr-10 gap-3">
           <Link to="/login">
            <div className="rounded-lg px-6 font-medium py-2 bg-pink-500 text-white hover:bg-pink-600 cursor-pointer transition-all">
              Login
            </div>
           </Link>
          <Link to="/singUp">
            <div className="px-6  py-2 border font-medium rounded-lg hover:bg-white cursor-pointer transition-all">
              Sing Up
            </div>
          </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
