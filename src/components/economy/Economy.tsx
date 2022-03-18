import React from "react";
import { ChartElement } from "../chart/ChartElement";

export const Economy = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            {/* Flex for the header */}
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <div>
                  <h1 className="old-font sm:text-3xl text-7xl font-large title-font mb-4 text-gray-900">
                    Economic
                  </h1>
                </div>
                <p className="leading-relaxed text-lg mb-4">
                  Tracking the impact on US imports, etc.
                </p>
                <a
                  className="text-indigo-500 inline-flex items-center hover:cursor-pointer"
                  href="https://www.axios.com/russia-ukraine-invasion-putin-live-updates-873196c6-15a2-47a0-8360-e3db5af96b3c.html"
                  target="_"
                >
                  Source
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="px-5 py-12 mx-auto">
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div className="p-4 lg:w-1/2 md:w-1/2 sm:w-1/2 sm:mb-0 mb-6">
                  <ChartElement
                    id="Gas"
                    units="USd"
                    source="https://www.axios.com/russia-ukraine-invasion-putin-live-updates-873196c6-15a2-47a0-8360-e3db5af96b3c.html"
                    labels={[
                      "3/11",
                      "3/12",
                      "3/13",
                      "3/14",
                      "3/15",
                      "3/16",
                      "3/17"
                    ]}
                    dataPoints={[
                      4.326, 4.331, 4.325, 4.325, 4.316, 4.305, 4.274
                    ]}
                  />
                </div>
                <div className="p-4 lg:w-1/2 md:w-1/2 sm:w-1/2 sm:mb-0 mb-6">
                  <ChartElement
                    id="Wheat"
                    units="USd/Bu"
                    source="https://tradingeconomics.com/commodity/wheat"
                    labels={[
                      "3/11",
                      "3/12",
                      "3/13",
                      "3/14",
                      "3/15",
                      "3/16",
                      "3/17"
                    ]}
                    dataPoints={[
                      1005.25, 1075.75, 1077.75, 1040, 1126, 1050.25, 1041.25
                    ]}
                  />
                </div>
                <div className="p-4 lg:w-1/2 md:w-1/2 sm:w-1/2 sm:mb-0 mb-6">
                  <ChartElement
                    id="Natural gas"
                    units="USd/MMBtu"
                    source="https://ycharts.com/indicators/henry_hub_natural_gas_spot_price"
                    labels={[
                      "2/28",
                      "3/1",
                      "3/2",
                      "3/3",
                      "3/4",
                      "3/5",
                      "3/6",
                      "3/7",
                      "3/8",
                    ]}
                    dataPoints={[
                      4.46, 4.36, 4.65, 5.36, 4.74, 4.74, 4.74, 4.93, 4.61,
                    ]}
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
