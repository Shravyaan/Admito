import React, { useState } from "react";
import { createVisitor } from "../../services/api"; // Added the API import

export default function UserDashboard() {
  const [formData, setFormData] = useState({
    name: "",
    visitCategory: "",
    contactNumber: "", // Match backend key
    address: "",
    vehicleNumber: "", // Match backend key
    reasonOfVisit: "", // Match backend key
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Get user's token
      
      // Call the API to save to MongoDB
      await createVisitor(formData, token);
      
      alert("Visitor registered successfully! Admin can now see your entry.");
      
      // Clear form
      setFormData({
        name: "",
        visitCategory: "",
        contactNumber: "",
        address: "",
        vehicleNumber: "",
        reasonOfVisit: "",
      });
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="auth-page"> {/* Changed to match your global CSS */}
      <div className="login-container" style={{ width: "450px" }}> 
        <h2>Visitor Entry</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Category</label>
          <input name="visitCategory" value={formData.visitCategory} onChange={handleChange} required />

          <label>Contact No</label>
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />

          <label>Vehicle No</label>
          <input type="text" name="vehicleNumber" value={formData.vehicleNumber} onChange={handleChange} />

          <label>Reason</label>
          <textarea 
            name="reasonOfVisit" 
            value={formData.reasonOfVisit} 
            onChange={handleChange} 
            style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ddd" }}
          />

          <button type="submit">Register Visitor</button>
        </form>
      </div>
    </div>
  );
}