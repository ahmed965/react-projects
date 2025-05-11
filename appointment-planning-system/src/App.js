import "bootstrap/dist/css/bootstrap.min.css";

import { DoctorList } from "./components/DoctorList";
import { useState } from "react";
import { TimeSlots } from "./components/TimeSlots";
import { AppointmentList } from "./components/AppointmentList";
import Navbar from "./components/Navbar";
import { DoctorListOverview } from "./pages/DoctorListOverivew";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<DoctorListOverview />} />
          <Route path="/appointments" element={<AppointmentList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
