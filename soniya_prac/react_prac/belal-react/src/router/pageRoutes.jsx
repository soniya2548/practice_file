import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../mainLayout/layout";
import HomePage from "../Pages/HomePage";
import RoboticSurgeryPage from "../Pages/RoboticSurgery/RoboticSurgeryPage";
import VatsSurgeryPage from "../Pages/VatsSurgery/VatsSurgeryPage";
import CancerProgramPage from "../Pages/CancerProgram/CancerProgramPage";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="robotic-surgery" element={<RoboticSurgeryPage />} />
          <Route path="vats-surgery" element={<VatsSurgeryPage />} />
          <Route path="cancer-program" element={<CancerProgramPage />} />
        </Route>
      </Routes>

    </>
  );
};

export default PageRoutes;
