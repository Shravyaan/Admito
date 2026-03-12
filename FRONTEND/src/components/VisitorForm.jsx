import { useState } from "react";
import { createVisitor } from "../services/api";

export default function VisitorForm() {
  const [formData, setFormData] = useState({
    name: "",
    visitCategory: "",
    contactNumber: "",
    address: "",
    vehicleNumber: "",
    reasonOfVisit: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User not authenticated. Please login first.");
      }

      await createVisitor(formData, token);

      alert("Visitor added successfully!");

      // Reset form
      setFormData({
        name: "",
        visitCategory: "",
        contactNumber: "",
        address: "",
        vehicleNumber: "",
        reasonOfVisit: "",
      });
    } catch (err) {
      setError(err.message || "Failed to add visitor");
      alert(err.message || "Failed to add visitor!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Add Visitor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
            disabled={loading}
          />
        </label>
        <br /><br />

        <label>
          Visit Category:
          <input
            type="text"
            name="visitCategory"
            value={formData.visitCategory}
            required
            onChange={handleChange}
            disabled={loading}
          />
        </label>
        <br /><br />

        <label>
          Contact Number:
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            required
            onChange={handleChange}
            disabled={loading}
          />
        </label>
        <br /><br />

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            required
            onChange={handleChange}
            disabled={loading}
          />
        </label>
        <br /><br />

        <label>
          Vehicle Number:
          <input
            type="text"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleChange}
            disabled={loading}
          />
        </label>
        <br /><br />

        <label>
          Reason of Visit:
          <input
            type="text"
            name="reasonOfVisit"
            value={formData.reasonOfVisit}
            required
            onChange={handleChange}
            disabled={loading}
          />
        </label>
        <br /><br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Adding Visitor..." : "Add Visitor"}
        </button>
      </form>
    </div>
  );
}