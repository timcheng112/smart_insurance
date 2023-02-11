import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Toggle() {
  const location = useLocation();
  const navigate = useNavigate();
  const [enabled, setEnabled] = useState(
    location.pathname === "/dashboard-customer"
  );

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="flex">
        <label class="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
              if (enabled) {
                navigate("/dashboard");
              } else {
                navigate("/dashboard-customer");
              }
            }}
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
          ></div>
          <span className="ml-2 text-sm font-medium text-gray-900">Customer Dashboard</span>
        </label>
      </div>
    </div>
  );
}
