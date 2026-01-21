import { useState } from "react";

export default function AddCrop() {
    const [form, setForm] = useState({
        name: "",
        price: "",
        quantity: "",
        farmer: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Crop added (UI only): " + JSON.stringify(form));
    };

    return (
        <div style={{ padding: "20px", maxWidth: "400px" }}>
            <h2>Add New Crop</h2>

            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Crop Name"
                    onChange={handleChange}
                    style={inputStyle}
                />

                <input
                    name="price"
                    placeholder="Price per kg"
                    onChange={handleChange}
                    style={inputStyle}
                />

                <input
                    name="quantity"
                    placeholder="Quantity (kg)"
                    onChange={handleChange}
                    style={inputStyle}
                />

                <input
                    name="farmer"
                    placeholder="Farmer Name"
                    onChange={handleChange}
                    style={inputStyle}
                />

                <button style={btnStyle}>Add Crop</button>
            </form>
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px"
};

const btnStyle = {
    padding: "10px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    cursor: "pointer"
};
