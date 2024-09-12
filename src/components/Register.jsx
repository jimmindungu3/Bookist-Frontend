import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = ({ setRegistered }) => {
  const [fieldType, setFieldType] = useState("password");
  // const Navigate = useNavigate();

  const changeFieldType = () => {
    fieldType === "password" ? setFieldType("text") : setFieldType("password");
  };

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telNo: "",
    password: "",
    confirmPassword: "",
  });

  const updateUserData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const notifySuccess = () => {
    setTimeout(() => setRegistered(true), 1700);
    toast.success("Registration successfull. Sign in to create Event", {
      position: "top-center",
      autoClose: 1500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "white",
        color: "#2563eb",
      },
      progressStyle: {
        backgroundColor: "#2563eb",
      },
    });
  };

  const notifyError = () =>
    toast.error("Oops! That didn't work. Check your details and try again", {
      position: "top-center",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "white",
        color: "#dc2626",
      },
      progressStyle: {
        backgroundColor: "#dc2626",
      },
    });

  const passwordMissmatch = () =>
    toast.error("Passwords don't match", {
      position: "top-center",
      autoClose: 1500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "white",
        color: "#dc2626",
      },
      progressStyle: {
        backgroundColor: "#dc2626",
      },
    });

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (userData.password === userData.confirmPassword) {
      try {
        const response = await axios.post(
          "https://bookist-backend.onrender.com/api/users",
          userData
        );
        if (response) {
          notifySuccess();
          setUserData({
            firstName: "",
            lastName: "",
            email: "",
            telNo: "",
            password: "",
            confirmPassword: "",
          });
        }
      } catch (error) {
        console.error("There was a problem with the axios request:", error);
        notifyError();
      }
    } else {
      passwordMissmatch();
    }
  };

  return (
    <div className="p-8 mb-20 flex flex-col justify-center bg-white bg-opacity-50 rounded-md text-center">
      <form onSubmit={handleRegistration}>
        <h2 className="text-2xl font-bold text-white mb-4 bg-blue-600 rounded-md pt-2 pb-2">
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
        <div className="relative w-full">
          <input
            required
            type={fieldType}
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={updateUserData}
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 pr-10"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <FaEye
              onClick={changeFieldType}
              className="h-5 w-5 text-gray-500 hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="relative w-full">
          <input
            required
            type={fieldType}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={userData.confirmPassword}
            onChange={updateUserData}
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
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md text-center hover:bg-blue-500 active:bg-blue-300"
        >
          Register
        </button>
      </form>
      <p className="pt-4 text-bold bg-white mt-3 pb-3 rounded-md">
        Already have an account?{" "}
        <span
          onClick={() => setRegistered(true)}
          className="text-blue-600 hover:text-blue-500 hover:cursor-pointer text-lg font-bold"
        >
          Sign In
        </span>
      </p>
    </div>
  );
};

export default Register;
