import React from "react";
import Admin from "./router/Admin";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
