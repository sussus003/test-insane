import React, { useEffect } from "react";
import Nav from "./Nav";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";
import DraggableMarker from "./DraggableMarker";
function Map() {
  const center = {
    lat: 51.505,
    lng: -0.09,
  };

  return (
    <>
      <Nav />
      <div className="left-side">
        <h1 style={{ color: "white" }}>Hi User1</h1>
      </div>
      <div className="right-side">
        <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <DraggableMarker />
        </MapContainer>
      </div>
    </>
  );
}
export default Map;
