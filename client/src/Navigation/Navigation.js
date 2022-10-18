import React from "react";
import { Route, Routes } from 'react-router-dom'
import BrandModels from '../Pages/BrandModels';
import Home from "../Pages/Home";
import Brands from "../Pages/Brands";
import Favorites from "../Pages/Favorites";

const Navigation = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/brands" element={<Brands />} />
    <Route path="/favorites" element={<Favorites />} />

    <Route path="/brand-models">
      <Route
        path=":brand"
        element={<BrandModels />}
      />
    </Route>
  </Routes>
);

export default Navigation;