import { Suspense, useState } from 'react';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Login = React.lazy(() => import("./components/login"));

const Signup = React.lazy(() => import("./components/SignUp"));

const Home = React.lazy(() => import("./components/home"));

const Guide = React.lazy(() => import("./components/guide"));

const Trip = React.lazy(() => import("./components/trips"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/trips" element={<Trip />} />
        </Routes>
      </Suspense>
    </Router>
  )
}



export default App 
