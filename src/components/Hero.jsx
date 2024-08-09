import axios from "axios";
import React, { useState } from "react";

const Hero = () => {
  const [registered, setRegistered] = useState(true);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telNo: "",
    password: "",
    role: "user",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateUserData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (userData.password === userData.confirmPassword) {
      axios
        .post("http://localhost:3000/users", userData)
        .then((res) => {
          console.log(res.status, res.data);
          alert("Signed Up Successfully");
          setUserData({
            firstName: "",
            lastName: "",
            email: "",
            telNo: "",
            password: "",
            confirmPassword: "",
            role: "user",
          });
        })
        .catch((err) => console.log(err));
    } else {
      alert("Passwords do not match");
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    // Assuming email and password are defined elsewhere in your component
    axios
      .get(`http://localhost:3000/users?email=${email}`)
      .then((res) => {
        const users = res.data;
        if (users.length === 0) {
          alert("User with that email does not exist");
        } else {
          if (users[0].password === password) {
            alert("Login successful");
          } else {
            alert("Incorrect password");
          }
        }
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred while signing in");
      });
  };

  return (
    <div
      className="relative"
      style={{
        backgroundImage: 'url("/src/assets/hero.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-blue-900 bg-opacity-50">
        <div className="container mx-auto px-4">
          <div className="h-screen-vh flex justify-center items-center">
            <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white text-center mb-4">
                  Seamless Bookings
                </h2>
                <p className="text-white text-center">
                  Welcome to Bookist. An application where users log in and book
                  for events and appointments.
                </p>
                <button
                  disabled
                  className="mt-8 mx-auto px-4 py-2 bg-blue-500 text-white block"
                >
                  Book With Us Today
                </button>
              </div>

              {registered ? (
                <div className="p-8 flex flex-col justify-center bg-white bg-opacity-50 rounded-md text-center">
                  <form onSubmit={handleSignIn}>
                    <h2 className="text-2xl font-bold text-white mb-4 bg-blue-500 rounded-md pt-2 pb-2">
                      Sign In
                    </h2>

                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                    />

                    <input
                      required
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                    />

                    <button
                      required
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md text-center hover:bg-blue-400 active:bg-blue-300"
                    >
                      Submit
                    </button>
                  </form>
                  <p className="pt-4 text-bold bg-white mt-3 pb-3 rounded-md">
                    Dont't have an account?{" "}
                    <span
                      onClick={() => setRegistered(false)}
                      className="text-blue-700 hover:text-blue-600 hover:cursor-pointer text-lg font-bold"
                    >
                      Sign Up
                    </span>
                  </p>
                </div>
              ) : (
                <div className="p-8 flex flex-col justify-center bg-white bg-opacity-50 rounded-md text-center">
                  <form onSubmit={handleRegistration}>
                    <h2 className="text-2xl font-bold text-white mb-4 bg-blue-500 rounded-md pt-2 pb-2">
                      Register
                    </h2>
                    <input
                      required
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={userData.firstName}
                      onChange={updateUserData}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input
                      required
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={userData.lastName}
                      onChange={updateUserData}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={userData.email}
                      onChange={updateUserData}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input
                      required
                      type="tel"
                      name="telNo"
                      placeholder="Phone Number"
                      value={userData.telNo}
                      onChange={updateUserData}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input
                      required
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={userData.password}
                      onChange={updateUserData}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input
                      required
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={userData.confirmPassword}
                      onChange={updateUserData}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
                    />
                    <button
                      required
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md text-center hover:bg-blue-400 active:bg-blue-300"
                    >
                      Register
                    </button>
                  </form>
                  <p className="pt-4 text-bold bg-white mt-3 pb-3 rounded-md">
                    Already have an account?{" "}
                    <span
                      onClick={() => setRegistered(true)}
                      className="text-blue-700 hover:text-blue-600 hover:cursor-pointer text-lg font-bold"
                    >
                      Sign In
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
