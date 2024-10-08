import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import DetailsScreen from "./Screens/DetailsScreen/DetailsScreen";
import AllCars from "./Screens/AllCars/AllCars";
import Login from "./Admin/Auth/Login";
import Dashboard from "./Admin/Dashboard/Dashboard";

function App() {
  // Use the useLocation hook to get the current location
  const location = useLocation();

  // Define an array of paths where the Header should not be shown
  const noHeaderRoutes = ["/admin", "/dash"];

  return (
    <div>
      {/* Conditionally render Header only if the current route is not in the noHeaderRoutes array */}
      {!noHeaderRoutes.includes(location.pathname) && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/details/:id" element={<DetailsScreen />} />
          <Route path="/cars" element={<AllCars />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/dash" element={<Dashboard />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
