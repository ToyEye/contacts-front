import React, { lazy } from "react";
import AppBar from "./Components/AppBar";
import { Routes, Route, Navigate } from "react-router-dom";

const HomeView = lazy(() => import("./views/HomePage"));
const Login = lazy(() => import("./views/LoginPage"));

const App: React.FC = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </>
  );
};

export default App;
