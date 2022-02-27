import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { makeDetailsPage, makeHomePage } from "../factories/pages";
import { Footer } from '../components/footer'

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={makeHomePage()} />
        <Route path="/details" element={makeDetailsPage()} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};
