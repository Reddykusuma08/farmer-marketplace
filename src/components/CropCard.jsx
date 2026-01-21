export default function CropCard({ crop }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px"
        }}>
            <h3>{crop.name}</h3>
            <p>Price: ₹{crop.price} / kg</p>
            <p>Farmer: {crop.farmer}</p>
            <button>Add to Cart</button>
        </div>
    );
}
