import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Pages/Login";
import AboutUs from "./Pages/AboutUs";
import AdminHome from "./Pages/admin/AdminHome";
import AdminVisitorList from "./Pages/admin/AdminVisitorList";
import AdminAnnouncements from "./Pages/admin/AdminAnnouncements";
import UserHome from "./Pages/user/UserHome";
import UserDashboard from "./Pages/user/UserDashboard";
import UserAnnouncements from "./Pages/user/UserAnnouncements";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Registration from "./Pages/Registration";

function Layout({ children }) {
  const location = useLocation();
  // ✅ hide on login and registration pages
  const hideNavbar = location.pathname === "/" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div style={{ paddingTop: hideNavbar ? "0" : "70px", paddingBottom: hideNavbar ? "0" : "70px" }}>
        {children}
      </div>
      {!hideNavbar && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />

          {/* Admin Panel */}
          <Route
            path="/admin/home"
            element={<ProtectedRoute role="admin"><AdminHome /></ProtectedRoute>}
          />
          <Route
            path="/admin/visitorlist"
            element={<ProtectedRoute role="admin"><AdminVisitorList /></ProtectedRoute>}
          />
          <Route
            path="/admin/announcements"
            element={<ProtectedRoute role="admin"><AdminAnnouncements /></ProtectedRoute>}
          />

          {/* User Panel */}
          <Route
            path="/user/home"
            element={<ProtectedRoute role="user"><UserHome /></ProtectedRoute>}
          />
          <Route
            path="/user/dashboard"
            element={<ProtectedRoute role="user"><UserDashboard /></ProtectedRoute>}
          />
          <Route
            path="/user/announcements"
            element={<ProtectedRoute role="user"><UserAnnouncements /></ProtectedRoute>}
          />

          {/* Registration */}
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Layout>
    </Router>
  );
}
