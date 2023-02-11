import React from "react";
import Navbar from "../../components/Navbar";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  Line,
} from "recharts";

const stepsData = [
  {
    name: "1 Feb",
    steps: 4000,
  },
  {
    name: "2 Feb",
    steps: 3000,
  },
  {
    name: "3 Feb",
    steps: 2000,
  },
  {
    name: "4 Feb",
    steps: 2780,
  },
  {
    name: "5 Feb",
    steps: 1890,
  },
  {
    name: "6 Feb",
    steps: 2390,
  },
  {
    name: "7 Feb",
    steps: 3490,
  },
];

const heartRateData = [
  {
    name: "1 Feb",
    bpm: 125,
  },
  {
    name: "2 Feb",
    bpm: 102,
  },
  {
    name: "3 Feb",
    bpm: 113,
  },
  {
    name: "4 Feb",
    bpm: 98,
  },
  {
    name: "5 Feb",
    bpm: 89,
  },
  {
    name: "6 Feb",
    bpm: 109,
  },
  {
    name: "7 Feb",
    bpm: 130,
  },
];

const DashboardCustomer = ({ current }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar current={current} />
      <div className="p-6">
        <h1 className="font-bold text-2xl font-dmSans">
          Welcome back, John Doe!
        </h1>
        <h1 className="text-2xl font-dmSans mt-6">
          Health Score:{" "}
          <span className="bg-green-400 text-center rounded-lg font-bold m-2 p-1 px-2">
            90
          </span>
        </h1>
        <div className="w-10"></div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white shadow-lg m-6 p-6 rounded-lg">
          <BarChart width={730} height={350} data={stepsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="steps" fill="#8884d8" />
          </BarChart>
        </div>
        <div className="bg-white shadow-lg m-6 p-6 rounded-lg">
          <LineChart
            width={730}
            height={350}
            data={heartRateData}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="bpm" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default DashboardCustomer;
