import { Link } from "react-router-dom";

export default function Dashboard() {
    const totalCrops = 3;
    const totalOrders = 5;

    return (
        <div style={{ padding: "20px" }}>
            <h2>Farmer Dashboard</h2>

            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
                <div style={cardStyle}>
                    <h3>Total Crops</h3>
                    <p>{totalCrops}</p>
                </div>

                <div style={cardStyle}>
                    <h3>Total Orders</h3>
                    <p>{totalOrders}</p>
                </div>
            </div>

            <div style={{ marginTop: "30px" }}>
                <Link to="/farmer/add-crop">
                    <button style={btnStyle}>Add New Crop</button>
                </Link>
            </div>
        </div>
    );
}

const cardStyle = {
    border: "1px solid #ccc",
    padding: "15px",
    width: "150px",
    borderRadius: "8px"
};

const btnStyle = {
    padding: "10px 15px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    cursor: "pointer"
};
