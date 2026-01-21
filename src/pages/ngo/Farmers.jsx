import { useState } from "react";

export default function NGOFarmers() {
    const [farmers, setFarmers] = useState([
        { id: 1, name: "Ravi", location: "Hyderabad", status: "Pending" },
        { id: 2, name: "Suresh", location: "Warangal", status: "Pending" },
        { id: 3, name: "Mahesh", location: "Nizamabad", status: "Approved" }
    ]);

    const updateStatus = (id, newStatus) => {
        const updated = farmers.map(f =>
            f.id === id ? { ...f, status: newStatus } : f
        );
        setFarmers(updated);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>NGO – Farmer Verification</h2>

            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={cell}>ID</th>
                        <th style={cell}>Name</th>
                        <th style={cell}>Location</th>
                        <th style={cell}>Status</th>
                        <th style={cell}>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {farmers.map(farmer => (
                        <tr key={farmer.id}>
                            <td style={cell}>{farmer.id}</td>
                            <td style={cell}>{farmer.name}</td>
                            <td style={cell}>{farmer.location}</td>
                            <td style={cell}>{farmer.status}</td>
                            <td style={cell}>
                                {farmer.status === "Pending" && (
                                    <>
                                        <button
                                            style={approveBtn}
                                            onClick={() => updateStatus(farmer.id, "Approved")}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            style={rejectBtn}
                                            onClick={() => updateStatus(farmer.id, "Rejected")}
                                        >
                                            Reject
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px"
};

const cell = {
    border: "1px solid #ccc",
    padding: "8px"
};

const approveBtn = {
    marginRight: "5px",
    padding: "5px 10px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    cursor: "pointer"
};

const rejectBtn = {
    padding: "5px 10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    cursor: "pointer"
};
