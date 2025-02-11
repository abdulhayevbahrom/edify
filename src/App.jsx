import React, { useEffect } from "react";
import Admin from "./router/Admin";
import { Route, Routes, Outlet } from "react-router-dom";
import Login from "./router/login/Login";
import { Auth } from "./router/login/Auth";
import socket from "./socket";

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to WebSocket server!");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);
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
