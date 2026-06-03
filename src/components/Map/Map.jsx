import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = () => {
  const [mapHeight, setMapHeight] = useState(window.innerWidth < 768 ? "300px" : "450px")

  useEffect(() => {
    const handleResize = () => {
      setMapHeight(window.innerWidth < 768 ? "30px" : "450px");
    };
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [mapHeight])
  
  return (
    <div className="map">
      <div className="container">
        <div className="content">
          <h1>Find us in the Heart of the City.</h1>
          <p>Centrally located and barrier-free accessible.</p>
          <MapContainer
            className="map-itself"
            center={[47.6779, 7.5586]}
            zoom={15}
            style={{ width: "100%", height: mapHeight }} 
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[47.6779, 7.5586]}>
              <Popup>
                <span>Dr.Med.Schmidt</span>
                <span> / </span>
                <span>Marktplatz 1, 12345 Mustesstadt / Lörrach</span>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;