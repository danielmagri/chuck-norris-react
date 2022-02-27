import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { makeDetailsPage, makeHomePage } from "../factories/pages";

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={makeHomePage()} />
        <Route path="/details/:id" element={makeDetailsPage()} />
      </Routes>
    </HashRouter>
  );
};
