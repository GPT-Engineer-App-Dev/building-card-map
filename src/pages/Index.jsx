import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Container } from "@chakra-ui/react";
import BuildingInfoCard from "../components/BuildingInfoCard";
import "leaflet/dist/leaflet.css";

const buildings = [
  {
    id: 1,
    name: "Building 1",
    location: "Oslo",
    position: [59.9139, 10.7522],
    sensorData: {
      temperature: 22,
      humidity: 45,
      co2: 400,
    },
  },
  {
    id: 2,
    name: "Building 2",
    location: "Bergen",
    position: [60.3913, 5.3221],
    sensorData: {
      temperature: 20,
      humidity: 50,
      co2: 420,
    },
  },
  {
    id: 3,
    name: "Building 3",
    location: "Trondheim",
    position: [63.4305, 10.3951],
    sensorData: {
      temperature: 21,
      humidity: 48,
      co2: 410,
    },
  },
  {
    id: 4,
    name: "Building 4",
    location: "Stavanger",
    position: [58.9690, 5.7331],
    sensorData: {
      temperature: 19,
      humidity: 52,
      co2: 430,
    },
  },
  {
    id: 5,
    name: "Building 5",
    location: "Kristiansand",
    position: [58.1467, 7.9956],
    sensorData: {
      temperature: 23,
      humidity: 44,
      co2: 390,
    },
  },
  {
    id: 6,
    name: "Building 6",
    location: "Tromsø",
    position: [69.6492, 18.9553],
    sensorData: {
      temperature: 18,
      humidity: 55,
      co2: 440,
    },
  },
  {
    id: 7,
    name: "Building 7",
    location: "Drammen",
    position: [59.7439, 10.2045],
    sensorData: {
      temperature: 22,
      humidity: 46,
      co2: 410,
    },
  },
  {
    id: 8,
    name: "Building 8",
    location: "Fredrikstad",
    position: [59.2184, 10.9298],
    sensorData: {
      temperature: 21,
      humidity: 47,
      co2: 415,
    },
  },
  {
    id: 9,
    name: "Building 9",
    location: "Sandnes",
    position: [58.8524, 5.7352],
    sensorData: {
      temperature: 20,
      humidity: 49,
      co2: 425,
    },
  },
  {
    id: 10,
    name: "Building 10",
    location: "Ålesund",
    position: [62.4722, 6.1549],
    sensorData: {
      temperature: 19,
      humidity: 51,
      co2: 435,
    },
  },
];

const Index = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <Container maxW="100vw" maxH="100vh" p={0} m={0}>
      <MapContainer center={[60.472, 8.4689]} zoom={5} style={{ height: "100vh", width: "100vw" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {buildings.map((building) => (
          <Marker
            key={building.id}
            position={building.position}
            eventHandlers={{
              click: () => {
                setSelectedBuilding(building);
              },
            }}
          >
            <Popup>{building.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <BuildingInfoCard building={selectedBuilding} />
    </Container>
  );
};

export default Index;