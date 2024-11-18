import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseDetails from "./components/CourseDetails";
import Sucess from "./components/Sucess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseDetails />} />
        <Route path="/sucess" element={<Sucess />} />
      </Routes>
    </Router>
  );
}

export default App;
