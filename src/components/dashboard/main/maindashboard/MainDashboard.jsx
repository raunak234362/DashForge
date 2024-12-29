import React from "react";
import { PieChart, BarChart, LineChart } from "../../../index";
import { Responsive, WidthProvider } from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const MainDashboard = () => {
  const layouts = {
    lg: [
      { i: "bar", x: 0, y: 0, w: 6, h: 5 },
      { i: "line", x: 6, y: 0, w: 6, h: 5 },
      { i: "pie", x: 0, y: 5, w: 6, h: 5 },
    ],
    md: [
      { i: "bar", x: 0, y: 0, w: 5, h: 5 },
      { i: "line", x: 5, y: 0, w: 5, h: 5 },
      { i: "pie", x: 0, y: 5, w: 5, h: 6 },
    ],
    sm: [
      { i: "bar", x: 0, y: 0, w: 6, h: 5 },
      { i: "line", x: 0, y: 5, w: 6, h: 5 },
      { i: "pie", x: 0, y: 10, w: 6, h: 6 },
    ],
    xs: [
      { i: "bar", x: 0, y: 0, w: 4, h: 5 },
      { i: "line", x: 0, y: 5, w: 4, h: 5 },
      { i: "pie", x: 0, y: 10, w: 4, h: 6 },
    ],
    xxs: [
      { i: "bar", x: 0, y: 0, w: 2, h: 5 },
      { i: "line", x: 0, y: 5, w: 2, h: 5 },
      { i: "pie", x: 0, y: 10, w: 2, h: 6 },
    ],
  };

  return (
    <div className="h-screen w-full overflow-auto p-4">
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1000, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={40}
        isResizable={true}
        draggableHandle=".handle"
        margin={[30, 30]}
      >
        {/* Bar Chart */}
        <div
          key="bar"
          className="resize-container relative flex flex-col  shadow-md rounded-md p-4 justify-center items-center"
        >
          <div className="handle cursor-pointer bg-gray-200 text-center p-2 rounded-md mb-2 text-sm font-semibold w-full">
            Bar Chart
          </div>
          <BarChart />
        </div>

        {/* Line Chart */}
        <div
          key="line"
          className="resize-container relative flex flex-col  shadow-md rounded-md p-4 justify-center items-center"
        >
          <div className="handle cursor-pointer bg-gray-200 text-center p-2 rounded-md mb-2 text-sm font-semibold w-full">
            Line Chart
          </div>
          <LineChart />
        </div>

        {/* Pie Chart */}
        <div
          key="pie"
          className="resize-container relative flex flex-col  shadow-md rounded-md p-4 justify-center items-center"
        >
          <div className="handle cursor-pointer bg-gray-200 text-center p-2 rounded-md mb-2 text-sm font-semibold w-full ">
            Pie Chart
          </div>
          <PieChart />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default MainDashboard;
