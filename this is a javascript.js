// Initialize the map and set its view to a specific latitude, longitude, and zoom level
const map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (you can use OpenStreetMap, Mapbox, or other tile providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker
L.marker([51.5, -0.09]).addTo(map)
  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
  .openPopup();

// Add a circle
L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map).bindPopup('I am a circle!');

// Add a polygon
L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map).bindPopup('I am a polygon!');