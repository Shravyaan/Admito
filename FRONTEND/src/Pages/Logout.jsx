import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Clear all session data (JWT token and Role)
    localStorage.clear();

    // 2. Short delay so the user sees the "Logging Out" message
    const timer = setTimeout(() => {
      // Change this to "/" if your login page is at the root route
      navigate("/"); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="auth-page">
      <div className="login-container">
        <h1 style={{ color: "#007bff" }}>Logging Out...</h1>
        <p>Your session is being cleared securely.</p>
        
        {/* Simple CSS Loader using a div */}
        <div style={{
          border: "4px solid #f3f3f3",
          borderTop: "4px solid #007bff",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          animation: "spin 1s linear infinite",
          margin: "20px auto"
        }}></div>
        
        <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>
          Redirecting to home...
        </p>
      </div>

      {/* Adding a quick inline animation for the loader since it's not in your CSS */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Logout;