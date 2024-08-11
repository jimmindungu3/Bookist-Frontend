import React, { useState } from "react";
import axios from "axios";

import { FaEye } from "react-icons/fa";

const SignIn = ({ setRegistered }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldType, setFieldType] = useState("password");

  const changeFieldType = () => {
    fieldType === "password" ? setFieldType("text") : setFieldType("password");
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:3000/users?email=${email}`)
      .then((res) => {
        const users = res.data;
        if (users.length === 0) {
          alert("User with that email does not exist");
        } else {
          if (users[0].password === password) {
            alert("Login successful");
            setEmail("");
            setPassword("");
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
        <div className="relative w-full">
          <input
            required
            type={fieldType}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 pr-10"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <FaEye
              onClick={changeFieldType}
              className="h-5 w-5 text-gray-500 hover:cursor-pointer"
            />
          </div>
        </div>

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
  );
};

export default SignIn;
