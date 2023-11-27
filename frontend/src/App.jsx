import { useState } from "react";
import "./App.css";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Developers from "./pages/developers.jsx";
import Community from "./pages/community.jsx";
import Roadmap from "./pages/roadmap.jsx";
import Ecosystem from "./pages/ecosystem.jsx";
import DApps from "./pages/dapps.jsx";
import Resources from "./pages/resources.jsx";
import Getstarted from "./pages/getstarted.jsx";
import TestEnv from "./pages/TestEnv.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/developers" element={<Developers />} />
          <Route path="/community" element={<Community />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/dapps" element={<DApps />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/getstarted" element={<Getstarted />} />
          <Route path="/test" element={<TestEnv />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
