import React from "react";
import Navbar from "../components/Navbar";
import BookEvent from "../components/BookEvent";

const Hero = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: 'url("hero.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-blue-900 bg-opacity-50">
        <Navbar />
        <div className="container mx-auto px-4">
          <div className="h-screen-vh flex justify-center items-center">
            <BookEvent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
