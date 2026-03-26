import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Security from "./Pages/Security";
import Network from "./Pages/Network";
import SystemHealth from "./Pages/SystemHealth";
// import Navbar from "./Components/Header/Navbar";
// import React from "react";

function App() {
  return (
    <Router>
      {/* <Navbar/> */}

      <Routes>
        <Route path="/" element={<Security />} />
        <Route path="/network" element={<Network />} />
        <Route path="/system-health" element={<SystemHealth />} />
      </Routes>
    </Router>
  );
}

export default App;