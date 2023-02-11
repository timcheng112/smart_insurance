import React from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Home = ({ current }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar current={current} />
      <div className="text-center pt-20">
        <p className="text-2xl font-dmSans">
          Welcome to{" "}
          <span className="font-poppins">
            <span className="font-bold">Smart</span>Insurance
          </span>
        </p>
      </div>
      <div className="w-full text-center pt-6">
        <Button text="Go to dashboard" onClick={() => navigate("/dashboard")} />
      </div>
    </div>
  );
};

export default Home;
