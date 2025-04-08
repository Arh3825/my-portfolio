import React from "react";
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";


const App = () => {
  return(
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path = "/" element={<Welcome />} />
          <Route path = "/about" element={<About />} />
          <Route path = "/projects" element={<Projects />} />
          <Route path = "/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;