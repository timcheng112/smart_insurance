import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DashboardCompany from "./pages/DashboardCompany/DashboardCompany";
import Home from "./pages/Home/Home";
import ViewCustomer from "./pages/ViewCustomer/ViewCustomer";
import DashboardCustomer from "./pages/DashboardCustomer/DashboardCustomer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home current="Home" />} />
            <Route
              path="/dashboard"
              element={<DashboardCompany current="Dashboard" />}
            />
            <Route
              path="/view-customer"
              element={<ViewCustomer current="View Customer" />}
            />
            <Route
              path="/dashboard-customer"
              element={<DashboardCustomer current="Dashboard" />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
