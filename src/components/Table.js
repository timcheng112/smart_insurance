import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Table = ({ customers }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-8 flex flex-col px-6">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
            <table className="min-w-full">
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 font-dmSans"
                    // colSpan={2}
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 font-dmSans"
                    // colSpan={2}
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 font-dmSans"
                    // colSpan={4}
                  >
                    Organisation
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 font-dmSans"
                    // colSpan={4}
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 font-dmSans"
                    // colSpan={4}
                  >
                    Actionables
                  </th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr className="border-t border-gray-200 bg-white">
                    <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6 font-dmSans">
                      {customer.id}
                    </td>
                    <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6 font-dmSans">
                      {customer.name}
                    </td>
                    <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6 font-dmSans">
                      {customer.organisation}
                    </td>
                    <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6 font-dmSans">
                      {customer.phone}
                    </td>
                    <td className=" px-4 py-3 text-left text-sm font-semibold text-gray-900 sm:px-6 font-dmSans">
                      <Button
                        text="View"
                        onClick={() =>
                          navigate("/view-customer", { state: { customer } })
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
