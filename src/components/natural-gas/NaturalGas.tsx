import React, { useEffect } from "react";
import {
  Chart,
  LineElement,
  LineController,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

export const NaturalGas = () => {
  // Handle chart.js
  useEffect(() => {
    let canvas!: any;
    let chartNaturalGas: any;
    let ctx: any;
    const dataCount = 7;
    const labels: string[] = [
      "2/28",
      "3/1",
      "3/2",
      "3/3",
      "3/4",
      "3/5",
      "3/6",
      "3/7",
      "3/8",
    ];
    const naturalGasPoints = [
      4.46, 4.36, 4.65, 5.36, 4.74, 4.74, 4.74, 4.93, 4.61,
    ];
    let data: Object;
    let config: any;
    // Setting the timeout
    setTimeout(() => {
      Chart.register(
        LineElement,
        LineController,
        LinearScale,
        CategoryScale,
        PointElement
      );
      for (let i = 0; i < dataCount; ++i) {
        if (labels.length < dataCount) {
          labels.push(i.toString());
        }
      }
      canvas = document.getElementById("chartNaturalGas");
      ctx = canvas.getContext("2d");
      data = {
        labels: labels,
        datasets: [
          {
            label: "Average natural gas prices across the last week",
            data: naturalGasPoints,
            borderColor: "rgba(255, 99, 132, 0.2)",
            fill: false,
            cubicInterpolationMode: "monotone",
            tension: 0.4,
          },
        ],
      };
      config = {
        type: "line",
        data: data,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Wheat prices",
            },
          },
          interaction: {
            intersect: false,
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Date",
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: "Price (USd/Bu)",
              },
              suggestedMin: Math.min(...naturalGasPoints),
              suggestedMax: Math.max(...naturalGasPoints),
            },
          },
          maintainAspectRatio: false,
        },
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      chartNaturalGas = new Chart(ctx, config);
    }, 100);
  });

  return (
    <>
      <div>
        <div className="min-w-0 max-w-md h-300px overflow-hidden -m-2">
          <canvas id="chartNaturalGas"></canvas>
        </div>
        <h2 className="old-font text-5xl font-medium title-font text-gray-900 mt-5">
          Natural gas
        </h2>
        <p className="text-base leading-relaxed mt-2">
          The average <b>national</b> price of natural gas.
        </p>
        {/* Learn more */}
        <a
          className="text-indigo-500 inline-flex items-center mt-3 hover:cursor-pointer"
          href="https://ycharts.com/indicators/henry_hub_natural_gas_spot_price"
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
    </>
  );
};
