import React, { useEffect } from "react";
import {
  Chart,
  LineElement,
  LineController,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

export const Wheat = () => {
  // Handle chart.js
  useEffect(() => {
    let canvas!: any;
    let chartWheat: any;
    let ctx: any;
    const dataCount = 7;
    const labels: string[] = [
      "3/10",
      "3/11",
      "3/12",
      "3/13",
      "3/14",
      "3/15",
      "5/16",
    ];
    const wheatPoints: number[] = [
      1060, 1005.25, 1075.75, 1077.75, 1040, 1126, 1050.25,
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
      canvas = document.getElementById("chartWheat");
      ctx = canvas.getContext("2d");
      data = {
        labels: labels,
        datasets: [
          {
            label: "Average wheat prices across the last week",
            data: wheatPoints,
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
              suggestedMin: Math.min(...wheatPoints),
              suggestedMax: Math.max(...wheatPoints),
            },
          },
          maintainAspectRatio: false,
        },
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      chartWheat = new Chart(ctx, config);
    }, 100);
  });

  return (
    <>
      <div>
        <div className="min-w-0 max-w-md h-300px overflow-hidden -m-2">
          <canvas id="chartWheat"></canvas>
        </div>
        <h2 className="old-font text-5xl font-medium title-font text-gray-900 mt-5">
          Wheat
        </h2>
        <p className="text-base leading-relaxed mt-2">
          The average <b>national</b> price of wheat over the past week.
        </p>
        {/* Learn more */}
        <a
          className="text-indigo-500 inline-flex items-center mt-3 hover:cursor-pointer"
          href="https://tradingeconomics.com/commodity/wheat"
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
