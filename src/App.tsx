import React from "react";
import Navbar from "./components/header/Navbar";
import Footer from "./components/FOoter/Footer";

import { Outlet } from "react-router";

export const App = () => {
  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  );
};
