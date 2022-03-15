import React from "react";

export const Cta = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full -mb-12">
            <h1 className="old-font sm:text-9xl text-xl font-large title-font mb-4 text-gray-900">
              🇺🇦 Ukraine Dashboard
            </h1>
            <h2 className="old-font sm:text-5xl text-md font-large title-font mb-4 text-gray-900">
              The most important information about the 2022 Russian invasion of
              Ukraine, all in one place. Updated multiple times a day. Currently
              being built out 👉️ expect frequent updates.
            </h2>
          </div>
          {/* Taking out the section to sign up via email
    <div
      className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end"
    >
      <div className="relative flex-grow w-full">
        <label htmlFor="full-name" class="leading-7 text-sm text-gray-600"
          >Full Name</label
        >
        <input
          type="text"
          id="full-name"
          name="full-name"
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative flex-grow w-full">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button
        className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Button
      </button>
    </div>
    */}
        </div>
      </section>
    </>
  );
};
