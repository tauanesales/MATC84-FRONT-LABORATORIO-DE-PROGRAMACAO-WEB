import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import Cadastro from "./components/cadastro/Cadastro";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recovery from "./components/recovery/Recovery";
import AdminController from "./components/admin/AdminController";
import Home from "./components/home/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/recovery" element={<Recovery />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
