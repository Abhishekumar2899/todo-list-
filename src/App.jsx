import React from "react";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCreate from "./component/UserCreate";
import Users from "./component/Users";
import EditUsers from "./component/EditUsers";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    
    <BrowserRouter>
      <Home />
      <ToastContainer/>
      <Routes>
        <Route element={<UserCreate />} path="/createusers" />
        <Route element={<Users />}  path="/users"/>
        <Route element={<EditUsers/>} path="/edit/:abc" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
