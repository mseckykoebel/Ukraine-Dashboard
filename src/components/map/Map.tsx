import React from "react";
import key from "../../assets/key.png";
import march_12 from "../../assets/march_12.png";

export const Map: React.FC = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <div>
                  <h1 className="old-font sm:text-3xl text-7xl font-large title-font mb-4 text-gray-900">
                    Current map
                  </h1>
                </div>
                <p className="leading-relaxed text-lg mb-4">
                  Updated as of March 12th, 2022
                </p>
                <a
                  className="text-indigo-500 inline-flex items-center hover:underline hover:cursor-pointer"
                  href="https://www.axios.com/russia-ukraine-invasion-putin-live-updates-873196c6-15a2-47a0-8360-e3db5af96b3c.html"
                  target="_"
                >
                  Source
                  {/* Arrow */}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    march_12
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="rounded-lg h-full overflow-hidden py-12">
              <div className="flex flex-col space-y-4">
                <div>
                  <img
                    alt="Key for the map of ukraine below"
                    className="rounded-md object-cover object-center h-full w-full"
                    src={key}
                  />
                </div>
                <div>
                  <img
                    alt="Map of the war"
                    className="rounded-md object-cover object-center h-full w-full"
                    src={march_12}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
