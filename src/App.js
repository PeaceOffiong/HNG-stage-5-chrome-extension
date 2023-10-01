import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages";
import { useState, useEffect } from "react";

function App() {

  return (
    <div className="App w-full">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
