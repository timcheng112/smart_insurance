import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";

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

const ViewCustomer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden bg-gray-100 shadow sm:rounded-lg">
      <Navbar />
      <div className="pl-6 pt-3">
        <Button text="Go back" onClick={() => navigate("/dashboard")} />
      </div>
      <div className="flex">
        <div className="px-4 py-5 sm:px-6 flex-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Customer Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details
          </p>
        </div>
        <div className="px-4 py-5 sm:px-6">
          <h3>Health Score</h3>
          <p className="bg-green-400 text-center rounded-lg font-bold">90</p>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {location.state.customer.name}
            </dd>
          </div>
          <div className="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Age</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {location.state.customer.age}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {location.state.customer.phone}
            </dd>
          </div>
          <div className="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Organisation</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {location.state.customer.organisation}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {location.state.customer.email}
            </dd>
          </div>
        </dl>
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

export default ViewCustomer;
