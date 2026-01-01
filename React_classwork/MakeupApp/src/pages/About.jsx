import React from "react";
import image from "../assets/about_img.jpg";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="flex flex-col items-center w-full h-screen bg-pink-200 "
      >
        <div className=" w-full flex justify-center gap-4 mt-30">
          <h1 className="text-2xl ">About Us</h1>
          <hr className="w-30 mt-4 h-0.5 rounded-2xl bg-gray-700 border-none " />
        </div>
        <div className="w-[80%] h-120 bg-pink-300 mt-10 rounded-xl flex shadow-lg overflow-hidden">
          <img src={image} alt="" className="w-100" />
          <div className=" w-full h-full px-4 py-4 flex flex-col justify-between">
            <p className="w-100 text-white font-medium">
              At Glow Organics, we believe that true beauty shouldn't cost the
              Earth. Our journey began with a simple mission: to provide
              high-performance makeup that is kind to your skin and the planet.
              We're passionate about harnessing the power of natural, ethically
              sourced ingredients to create stunning looks you can feel good
              about.
            </p>

            <ul className="flex gap-5 border p-2 rounded-xl text-white">
              <li>
                Our Philosophy: We are committed to transparency, which is why
                every product description includes detailed ingredient
                information. 
              </li>
              
              <li>
                Cruelty-Free Commitment: All our products are 100% cruelty-free
                and plant-based, perfect for the ethical consumer.
              </li>
              <li>
                Beyond the Product: We love sharing our knowledge! Explore our
                [Blog/Tips Section Link] for expert advice, sustainable beauty
                practices, and inspiration.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
