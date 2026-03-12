import { useContext } from "react";
import { VisitorContext } from "../context/VisitorContext";

export default function VisitorList() {
  const { visitors } = useContext(VisitorContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Visitor List</h1>
      {visitors.length === 0 ? (
        <p>No visitors yet.</p>
      ) : (
        <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Vehicle Name</th>
              <th>Vehicle Number</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((v) => (
              <tr key={v.id}>
                <td>{v.name}</td>
                <td>{v.contact}</td>
                <td>{v.email}</td>
                <td>{v.vehicleName}</td>
                <td>{v.vehicleNumber}</td>
                <td>{v.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}