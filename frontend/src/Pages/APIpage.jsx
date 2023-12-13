import { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};
const cities = {
  NewYork: { lat: 40.7128, lng: -74.0060 },
  LosAngeles: { lat: 34.0522, lng: -118.2437 },
  Chicago: { lat: 41.8781, lng: -87.6298 },
  Houston: { lat: 29.7604, lng: -95.3698 }
};
const MapContainer = (props) => {
  const [selectedCity, setSelectedCity] = useState('NewYork');
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  return (
    <div>
      <select value={selectedCity} onChange={handleCityChange}>
        {Object.keys(cities).map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      <Map
        google={props.google}
        zoom={3.5}
        style={mapStyles}
        initialCenter={cities[selectedCity]}>
        <Marker position={cities[selectedCity]} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA9ja_dJX-m2ftn2UoJKm-CdgIB0crhnvM' // Replace with your API key
})(MapContainer);
