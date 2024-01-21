import React, { useEffect } from "react";
import Nav from "./Nav";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";
import DraggableMarker from "./DraggableMarker";
function Map() {
  const position = [8.1386, 5.1026]; // [latitude, longitude]
  const zoomLevel = 13;
  const center = {
    lat: 51.505,
    lng: -0.09,
  };
  const peak = [
    "AM Peaks (7AM - 9AM)",
    "MD Peak (11AM - 13PM)",
    "PM Peaks (5PM - 7PM)",
  ];
  
  return (
    <>
      <Nav />
      <div className="left-side">
        <input className="card-container" type="date"></input>
       
        <select className="card-container" name="peak-time">
          {peak.map((peaktime) => (
            <option>{peaktime}</option>
          ))}
        </select>

        <div className="card-container">Traffic</div>
        <div className="card-container">OD</div>
        <div className="card-container">Truck Speed</div>
        <div className="card-container">Truck Ban</div>
      </div>
      <div className="right-side">
        {/*  <MapContainer
          center={position}
          zoom={zoomLevel}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer> */}
      </div>
    </>
  );
}
export default Map;
