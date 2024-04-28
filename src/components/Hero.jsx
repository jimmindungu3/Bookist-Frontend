import React, { useState, useEffect } from "react";

const Hero = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telNo: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowRegisterForm(window.innerWidth > 768); // Check window width
    };

    window.addEventListener("resize", handleResize); // Listen to resize event

    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up
    };
  }, []);

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
                  Lorem Ipsum
                </h2>
                <p className="text-white text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  eos blanditiis iusto nostrum recusandae. Voluptatibus iusto
                  fugiat accusantium nihil sint!
                </p>
                <button className="mt-8 mx-auto px-4 py-2 bg-blue-500 hover:bg-blue-400 active:bg-blue-300 text-white rounded-md block">
                  Book Now...
                </button>
              </div>
              {showRegisterForm && (
                <div className="p-8 flex flex-col justify-center">
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white bg-opacity-50 p-4 rounded-md text-center"
                  >
                    <h2 className="text-2xl font-bold text-white mb-4 bg-blue-500 rounded-md pt-2 pb-2">Register</h2>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input
                      type="tel"
                      name="telNo"
                      placeholder="Phone Number"
                      value={formData.telNo}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md text-center hover:bg-blue-400 active:bg-blue-300"
                    >
                      Register
                    </button>
                  </form>
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

