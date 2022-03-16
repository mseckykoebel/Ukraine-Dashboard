import React, { useEffect } from "react";
import {
  Chart,
  LineElement,
  LineController,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

interface ChartProps {
  id: string;
  units: string;
  source: string;
  labels: string[];
  dataPoints: number[];
}

export const ChartElement: React.FC<ChartProps> = ({
  id,
  units,
  source,
  labels,
  dataPoints,
}) => {
  let chartLabel: any = `chart${id}`;
  // Handle chart.js
  useEffect(() => {
    let canvas!: any;
    let ctx: any;
    let data: Object;
    let config: any;
    const dataCount = dataPoints.length;
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
      canvas = document.getElementById(`${chartLabel}`);
      ctx = canvas.getContext("2d");
      data = {
        labels: labels,
        datasets: [
          {
            label: `Average ${id.toLowerCase()} prices from this last week`,
            data: dataPoints,
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
              text: `${id.charAt(0).toUpperCase()}${id.slice(1)} prices`,
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
                text: `Price (${units})`,
              },
              suggestedMin: Math.min(...dataPoints),
              suggestedMax: Math.max(...dataPoints),
            },
          },
          maintainAspectRatio: false,
        },
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      chartLabel = new Chart(ctx, config);
    }, 100);
  });

  return (
    <>
      <div>
        <div className="min-w-0 max-w-md h-300px overflow-hidden -m-2">
          <canvas id={chartLabel}></canvas>
        </div>
        <h2 className="old-font text-5xl font-medium title-font text-gray-900 mt-5">
          {id}
        </h2>
        <p className="text-base leading-relaxed mt-2">
          The average <b>national</b> price of {id.charAt(0).toLowerCase()}
          {id.slice(1)} over the past week.
        </p>
        {/* Learn more */}
        <a
          className="text-indigo-500 inline-flex items-center mt-3 hover:cursor-pointer"
          href={source}
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
