var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

// step 1. obtain the users location


// step 2. map the location on a leaflet map


//step 3. Allow the user to select a business type from a list and map the five nearest locations on the map using the Foursquare API

