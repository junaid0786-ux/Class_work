import React from "react";
import hero from "../assets/hero.jpg";
import About from "./About";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="flex items-center justify-center w-full h-screen bg-pink-200 text-4xl "
      >
        <div className=" w-[90%] h-130 mt-35 rounded-xl bg-pink-100 shadow-xl overflow-hidden absolute top-3 ">
          <img src={hero} alt="" className="w-full  absolute" />
          <div className="w-full h-full bg-pink-400/60 relative p-5">
            <div className="relative flex flex-col gap-5 font-extrabold top-5 text-9xl text-white mt-5 justify-center items-center">
              <h1>Glowery</h1>
              <p className="text-[1rem] leading-5 font-normal l w-200 text-center text-white">
                "Find your everyday glow with our selection of essential,
                long-lasting makeup. From full coverage foundations to
                waterproof formulas, we provide the reliable products that give
                you all-day confidence. Beauty should be fun, accessible, and an
                integral part of your daily routine"
              </p>
            </div>
            <div className="flex  relative top-20 justify-center gap-5">
              <div className="bg-pink-500 shadow-md  text-[1.2rem] font-medium px-5 flex items-center justify-center   text-white rounded-xl relative  hover:bg-pink-600 cursor-pointer transition-all">
                Shop Now
              </div>
              <div className="bg-pink-300/50 shadow-md border text-[1.2rem] font-medium flex items-center justify-center px-5 py-2  text-white rounded-xl relative hover:bg-white/50 hover:text-black cursor-pointer transition-all">
                About Us
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
    </>
  );
};

export default Home;
