import React, { useState } from "react";
import { Link } from "react-router-dom";

import SignIn from "./SignIn";
import Register from "./Register";

const Hero = () => {
  const [registered, setRegistered] = useState(true);

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
        <div className="container mx-auto px-4">
          <div className="h-auto sm:h-screen flex justify-center items-center">
            <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white text-center mb-4">
                  Seamless Bookings
                </h2>
                <p className="text-white text-center">
                  Welcome to Bookist. An application where users log in and book
                  for events and appointments.
                </p>
                <Link to={"book-event"}>
                  <button className="mt-8 mx-auto px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md block">
                    Book With Us Today
                  </button>
                </Link>
              </div>

              {registered ? (
                <SignIn setRegistered={setRegistered} />
              ) : (
                <Register setRegistered={setRegistered} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
