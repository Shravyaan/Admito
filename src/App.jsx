import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./Pages/Dashboard";
import VisitorList from "./Pages/VisitorList";
import AboutUs from "./Pages/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: "70px", paddingBottom: "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/visitorlist" element={<VisitorList />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}