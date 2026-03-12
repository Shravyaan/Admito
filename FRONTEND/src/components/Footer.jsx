export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "#007bff",
        color: "white",
        textAlign: "center",
        padding: "15px",
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 1000
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Admitto Visitor Management System
      </p>
    </footer>
  );
}