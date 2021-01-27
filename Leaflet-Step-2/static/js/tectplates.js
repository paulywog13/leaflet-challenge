
//Tester js to get tectonic plates added to map


var tect_platesUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"
var tectPlates = new L.LayerGroup();
d3.json(tect_platesUrl, function(tectplatesData) {
    // Once we get a response, send the data.features object to the createFeatures function
    
        // Create a GeoJSON Layer the tectonic plates data
        L.geoJson(tectplatesData, {
            color: "rgb(196, 10, 10)",
            weight: 2
        // Add data LayerGroup
        }).addTo(tectPlates);
        // Add tectonic plates Layer to map
        tectPlates.addTo(myMap);
    });
    var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
      });
      var baseMaps = {
            "Street Map": streetmap,};
var myMap = L.map("mapid", {
    center: [15.5994, -53.6731],
    zoom: 3,
    layers: [streetmap, tectPlates]
    });