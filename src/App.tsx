import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Project from "./Pages/Project";
import CaseStudies from "./Pages/CaseStudies";

export default function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Experience" element={<Experience />} />
      <Route exact path="/Project" element={<Project />} />
      <Route exact path="/CaseStudies" element={<CaseStudies />} />
    </Routes>
  </Router>
  )
}
