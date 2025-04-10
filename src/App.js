import React from "react";
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";



const App = () => {
  return(
    <Router basename="/my-portfolio">
      <Routes>
        <Route element={<Layout />}>
          <Route path = "/" element={<Welcome />} />
          <Route path = "/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;