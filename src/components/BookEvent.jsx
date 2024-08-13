import React, { useState, useEffect } from "react";
import Map from "./Map";
import axios from "axios";

const AddEvent = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    eventId: "",
    fullName: "",
    IdNo: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // Replace with actual submission logic
  };

  return (
    <div className="container mx-auto px-4">
      <div className="h-screen-vh flex justify-center items-center">
        <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 gap-2 bg-white bg-opacity-75 rounded-md">
          <div className="p-8 flex flex-col justify-center rounded-md text-center">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-50 rounded-md p-6 bg-opacity-50"
            >
              <h2 className="text-2xl font-bold text-white mb-4 bg-blue-500 rounded-md pt-2 pb-2">
                Book For Event
              </h2>
              <div className="mb-4 text-left">
                <label htmlFor="event" className="block">
                  Choose Event
                </label>
                <select
                  id="event"
                  name="eventId" // Changed name to eventId
                  value={formData.eventId}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="" disabled>
                    Select Event
                  </option>
                  {events.map((event) => (
                    <option key={event.id} value={event.id}>
                      {event.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4 text-left">
                <label htmlFor="fullName" className="block">
                  Your Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4 text-left">
                <label htmlFor="IdNo" className="block">
                  Your ID No
                </label>
                <input
                  type="text"
                  name="IdNo"
                  value={formData.IdNo}
                  onChange={handleChange}
                  required
                  placeholder="ID Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4 text-left">
                <label htmlFor="email" className="block">
                  Your email 
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 font-semibold   bg-blue-500 text-white rounded-md text-center hover:bg-blue-400 active:bg-blue-300"
              >
                Book
              </button>
            </form>
          </div>
          <div className="py-8">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
