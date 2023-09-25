import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./login/login";
import Admin from "./admin/admin";


const Rutas = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Home />} />
                <Route
                    path="/home"
                    element={<Home />} />
                <Route
                    path="/login"
                    element={<Login />} />
                <Route
                    path="/admin"
                    element={<Admin/>}
                    />
            </Routes>
        </Router>
    )
}

export default Rutas;