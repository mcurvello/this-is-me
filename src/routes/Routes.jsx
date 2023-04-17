import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import AboutMe from "../screens/AboutMe";
import Contact from "../screens/Contact";
import Experience from "../screens/Experience";
import Education from "../screens/Education";

export default function Switch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experiences" element={<Experience />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </BrowserRouter>
  );
}
