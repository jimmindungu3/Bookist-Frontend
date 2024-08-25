import React, { useState } from "react";
import Map from "./Map";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEvent = () => {
  const [event, setEvent] = useState({
    title: "",
    venue: "",
    capacity: "",
    dateTime: "",
    charge: "",
    description: "",
    category: [],
    status: "upcoming",
  });

  const categories = [
    "Music",
    "Conference",
    "Workshop",
    "Sports",
    "Networking",
    "Theatre",
    "Exhibition",
  ];

  const notifySuccess = () => {
    setTimeout(() => setRegistered(true), 1700);
    toast.success("Event created successfully", {
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
    toast.error("Oops! Could not create event", {
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

  const updateEventData = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      let updatedCategories = [...event.category];
      if (e.target.checked) {
        updatedCategories.push(value);
      } else {
        updatedCategories = updatedCategories.filter((cat) => cat !== value);
      }
      setEvent({ ...event, category: updatedCategories });
    } else {
      setEvent({ ...event, [name]: value });
    }
  };

  const handleCreateEvent = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/events", event)
      .then((res) => {
        notifySuccess();
        setEvent({
          title: "",
          venue: "",
          capacity: "",
          dateTime: "",
          charge: "",
          description: "",
          category: [],
          status: "upcoming",
        });
      })
      .catch((err) => {
        console.log(err);
        notifyError();
      });
  };

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
          <div className="py-10 flex justify-center items-center">
            <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 gap-2 bg-white bg-opacity-75 rounded-md">
              <div className="p-8 flex flex-col justify-center rounded-md text-center">
                <form className="bg-slate-50 rounded-md p-6 bg-opacity-45">
                  <h2 className="text-2xl font-bold text-white mb-4 bg-blue-500 rounded-md pt-2 pb-2">
                    Create A New Event
                  </h2>
                  <div className="mb-4 text-left">
                    <label htmlFor="title" className="block">
                      Event Title
                    </label>
                    <input
                      onChange={updateEventData}
                      required
                      type="text"
                      name="title"
                      value={event.title}
                      placeholder="Event Title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      minLength="5"
                      maxLength="50"
                    />
                  </div>
                  <div className="mb-4 text-left">
                    <label htmlFor="status" className="block">
                      Status
                    </label>
                    <select
                      name="status"
                      value={event.status}
                      onChange={updateEventData}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="upcoming">Upcoming</option>
                      <option value="ongoing">Ongoing</option>
                    </select>
                  </div>
                  <div className="mb-4 text-left">
                    <label htmlFor="venue" className="block">
                      Venue
                    </label>
                    <input
                      onChange={updateEventData}
                      required
                      type="text"
                      name="venue"
                      value={event.venue}
                      placeholder="E.g Hotel Amex RM 20"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      minLength="5"
                      maxLength="70"
                    />
                  </div>
                  <div className="mb-4 text-left">
                    <label htmlFor="capacity" className="block">
                      Capacity
                    </label>
                    <input
                      onChange={updateEventData}
                      required
                      type="number"
                      name="capacity"
                      value={event.capacity}
                      placeholder="Capacity"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      min="10"
                    />
                  </div>
                  <div className="mb-4 text-left">
                    <label htmlFor="dateTime" className="block">
                      Event Date and Time
                    </label>
                    <input
                      onChange={updateEventData}
                      required
                      type="datetime-local"
                      name="dateTime"
                      value={event.dateTime}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4 text-left">
                    <label htmlFor="charge" className="block">
                      Charge Per Head
                    </label>
                    <input
                      onChange={updateEventData}
                      required
                      type="number"
                      name="charge"
                      value={event.charge}
                      placeholder="Charge Per head"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      min="0"
                    />
                  </div>
                  <div className="mb-4 text-left">
                    <label htmlFor="description" className="block">
                      Description
                    </label>
                    <textarea
                      onChange={updateEventData}
                      name="description"
                      value={event.description}
                      placeholder="Event Description"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      maxLength="500"
                    />
                  </div>
                  <div className="mb-4 text-left">
                    <label className="block mb-2">Category (max 4)</label>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((cat) => (
                        <div key={cat}>
                          <input
                            type="checkbox"
                            id={cat}
                            name="category"
                            value={cat}
                            checked={event.category.includes(cat)}
                            onChange={updateEventData}
                            disabled={
                              event.category.length >= 4 &&
                              !event.category.includes(cat)
                            }
                          />
                          <label htmlFor={cat} className="ml-2">
                            {cat}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    onClick={(e) => handleCreateEvent(e)}
                    className="px-4 py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md text-center hover:bg-blue-500 active:bg-blue-400"
                  >
                    Create Event
                  </button>
                </form>
              </div>
              <div className="flex justify-center items-center">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
