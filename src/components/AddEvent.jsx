import React from "react";
import Map from "./Map";

const AddEvent = () => {
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
          <div className="h-screen-vh flex justify-center items-center">
            <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 gap-2 bg-white bg-opacity-75 rounded-md">
              <div className="p-8 flex flex-col justify-center rounded-md text-center">
                <form className="bg-slate-50 rounded-md p-6 bg-opacity-45">
                  <h2 className="text-2xl font-bold text-white mb-4 bg-blue-500 rounded-md pt-2 pb-2">
                    Create A New Event
                  </h2>
                  <div className="mb-4 text-left">
                    <label htmlFor="name" className="block">
                      Event Title
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Event Title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4 text-left">
                    <label htmlFor="date" className="block">
                      Event Date
                    </label>
                    <input
                      required
                      type="date"
                      name="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4 text-left">
                    <label htmlFor="time" className="block">
                      Kickoff Time
                    </label>
                    <input
                      required
                      type="time"
                      name="time"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4 text-left">
                    <label htmlFor="venue" className="block">
                      Venue
                    </label>
                    <input
                      required
                      type="text"
                      name="venue"
                      placeholder="E.g Hotel Amex RM 20"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4 text-left">
                    <label htmlFor="charges" className="block">
                      Charge Per Head
                    </label>
                    <input
                      required
                      type="text"
                      name="charges"
                      placeholder="Charge Per head"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4 text-left">
                    <label htmlFor="capacity" className="block">
                      Capacity
                    </label>
                    <input
                      required
                      type="number"
                      name="capacity"
                      placeholder="Capacity"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <button
                    required
                    type="submit"
                    className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md text-center hover:bg-blue-400 active:bg-blue-300"
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
