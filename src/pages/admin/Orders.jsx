export default function Orders() {
    const orders = [
        { id: 1, crop: "Tomato", customer: "Anil", status: "Pending" },
        { id: 2, crop: "Potato", customer: "Sunita", status: "Assigned" },
        { id: 3, crop: "Onion", customer: "Rahul", status: "Delivered" }
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h2>Admin – Orders Management</h2>

            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thtd}>Order ID</th>
                        <th style={thtd}>Crop</th>
                        <th style={thtd}>Customer</th>
                        <th style={thtd}>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td style={thtd}>{order.id}</td>
                            <td style={thtd}>{order.crop}</td>
                            <td style={thtd}>{order.customer}</td>
                            <td style={thtd}>{order.status}</td>
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

const thtd = {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "left"
};
