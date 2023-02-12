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
import Button from "../../components/Button";

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

const data = [
  {
    name: "Jan",
    actual: 50,
    forecasted: 60,
  },
  {
    name: "Feb",
    actual: 60,
    forecasted: 67,
  },
  {
    name: "Mar",
    actual: 73,
    forecasted: 85,
  },
  {
    name: "Apr",
    actual: 70,
    forecasted: 57,
  },
  {
    name: "May",
    actual: 80,
    forecasted: 90,
  },
  {
    name: "Jun",
    actual: 90,
    forecasted: 81,
  },
  {
    name: "Jul",
    // actual: 34,
    forecasted: 54,
  },
];

const DashboardCustomer = ({ current }) => {
  return (
    <div className="flex flex-col h-full bg-gray-100">
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
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white shadow-lg m-6 p-6 rounded-lg">
          <LineChart
            width={730}
            height={350}
            data={data}
            margin={{ top: 40, right: 20, left: 20, bottom: 5 }}
          >
            <text
              x={800 / 2}
              y={15}
              fill="black"
              textAnchor="middle"
              dominantBaseline="central"
            >
              <tspan fontSize="14">Health Score Forecasting</tspan>
            </text>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="actual" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line dataKey="forecasted" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="bg-white shadow-lg m-6 p-6 rounded-lg">
          <h1 className="text-center">Current Health Insurance Plans</h1>
          <div className="mt-8 flex flex-col px-6">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                  <table className="min-w-full">
                    <thead className="bg-white">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          // colSpan={2}
                        >
                          Insurance Number
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          // colSpan={2}
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          // colSpan={4}
                        >
                          Personal Accident
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          // colSpan={4}
                        >
                          Injury
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          // colSpan={4}
                        >
                          Critical Illness
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          // colSpan={4}
                        >
                          Premiums Payable
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          // colSpan={4}
                        >
                          Actionables
                        </th>
                      </tr>
                      <tr className="border-t border-b border-gray-200 bg-white">
                        <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6">
                          IP123
                        </td>
                        <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6">
                          Plan A
                        </td>
                        <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6">
                          Up to $5,000
                        </td>
                        <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6">
                          Up to $3,000
                        </td>
                        <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6">
                          Up to $15,000
                        </td>
                        <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6">
                          $3,000
                        </td>
                        <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6">
                          <Button text="View" />
                        </td>
                      </tr>
                    </thead>
                  </table>
                  <table className="min-w-full border-t mt-6">
                    <thead className="bg-white">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          // colSpan={2}
                        >
                          Insurance Number
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          // colSpan={2}
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          // colSpan={4}
                        >
                          Death
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          // colSpan={4}
                        >
                          Hospitalisation
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          // colSpan={4}
                        >
                          Premiums Payable
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          // colSpan={4}
                        >
                          Actionables
                        </th>
                      </tr>
                      <tr className="border-t border-gray-200 bg-white">
                        <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6">
                          LIP20
                        </td>
                        <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6">
                          Plan B
                        </td>
                        <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6">
                          Up to $5,000
                        </td>
                        <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6">
                          Up to $3,000
                        </td>
                        <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6">
                          $5,000
                        </td>
                        <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6">
                          <Button text="View" />
                        </td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCustomer;
