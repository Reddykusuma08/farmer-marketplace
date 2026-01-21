import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div style={navStyle}>
            <h3 style={{ color: "white" }}>Farmer Market</h3>

            <div style={{ display: "flex", gap: "15px" }}>
                <Link style={linkStyle} to="/">Home</Link>
                <Link style={linkStyle} to="/farmer/dashboard">Farmer</Link>
                <Link style={linkStyle} to="/farmer/add-crop">Add Crop</Link>
                <Link style={linkStyle} to="/admin/orders">Admin</Link>
                <Link style={linkStyle} to="/ngo/dashboard">NGO</Link> {/* 👈 Added */}
            </div>
        </div>
    );
}

const navStyle = {
    backgroundColor: "#2f855a",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
};

const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
};
