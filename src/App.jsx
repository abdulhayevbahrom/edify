import React from "react";
import Admin from "./router/Admin";
import { Route, Routes, Outlet } from "react-router-dom";
import Login from "./router/login/Login";
import { Auth } from "./router/login/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Auth />}>
          <Route element={<Outlet />}>
            <Route path="/*" element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
