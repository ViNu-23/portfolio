import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import CaseStudies from "./Pages/CaseStudies";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/CaseStudies" element={<CaseStudies />} />
      </Routes>
    </Router>
  );
}

