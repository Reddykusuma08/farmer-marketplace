import { crops } from "../data";
import CropCard from "../components/CropCard";

export default function Home() {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Available Crops</h2>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "15px"
            }}>
                {crops.map(crop => (
                    <CropCard key={crop.id} crop={crop} />
                ))}
            </div>
        </div>
    );
}
