import { useState, useContext } from "react";
import { VisitorContext } from "../context/VisitorContext";

export default function Dashboard() {
  const { visitors, setVisitors } = useContext(VisitorContext);
  const [form, setForm] = useState({
    name: "",
    visitCategory:"",
    contact: "",
    email: "",
    vehicleName: "",
    vehicleNumber: "",
    purpose: ""
  });
  const [editingId, setEditingId] = useState(null);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setVisitors(visitors.map((v) => v.id === editingId ? { ...form, id: editingId } : v));
      setEditingId(null);
      setSuccess("Visitor updated successfully!");
    } else {
      setVisitors([...visitors, { ...form, id: Date.now() }]);
      setSuccess("Visitor added successfully!");
    }
    setForm({ name:"", contact:"", email:"", vehicleName:"", vehicleNumber:"", purpose:"" });
    setTimeout(() => setSuccess(""), 3000);
  };

  const handleEdit = (visitor) => {
    setForm(visitor);
    setEditingId(visitor.id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Visitor Hub</h1>
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px", maxWidth: "400px" }}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="visitCategory" placeholder="Category" value={form.visitCategory} onChange={handleChange} />
        <input name="contact" placeholder="Contact Number" value={form.contact} onChange={handleChange} />
        <input name="email" placeholder="Email ID" value={form.email} onChange={handleChange} />
        <input name="vehicleName" placeholder="Vehicle Name" value={form.vehicleName} onChange={handleChange} />
        <input name="vehicleNumber" placeholder="Vehicle Number" value={form.vehicleNumber} onChange={handleChange} />
        <input name="purpose" placeholder="Purpose of Visit" value={form.purpose} onChange={handleChange} />
        <button type="submit">{editingId ? "Update Visitor" : "Add Visitor"}</button>
      </form>
    </div>
  );
}