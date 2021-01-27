
//   Store API query variables
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
  console.log(data);
});

//Assigning Color values based on depth for each earthquake and the map legend
function depth_color(depth) {
    if (depth >90)
        return "rgb(196, 10, 10)";
    else if (depth > 70)
        return " rgb(226, 77, 8)";
    else if (depth > 50)
        return "rgb(245, 118, 0)";
    else if (depth > 30) 
        return "rgb(236, 177, 12)";
    else if (depth > 10)
        return "rgb(180, 228, 5)";
    else 
        return "rgb(7, 224, 18)";
}

function createFeatures(earthquakeData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place, magnitude, and depth of each earthquake
  function onEachFeature(feature, layer) {
   
    layer.bindPopup("<h3>" + feature.properties.place +
      "</h3><hr><p> Magnitude " + feature.properties.mag +
      "</p><hr><p>Depth " + feature.geometry.coordinates[2] + "(km)</p>");
  }


  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {
    
    //creating a circle marker for each earthquake in which the redius of the circle will increase 
    //based upon the magnitude of the earthquake
    pointToLayer: function(feature, earthquake_latlon) {
        return new L.circle(earthquake_latlon, {
            radius: (feature.properties.mag) * 40000,
            fillColor: depth_color(feature.geometry.coordinates[2]), 
            fillOpacity: 1,
            weight: 0.3,
            opacity: 1,
            color: "#000000",
            stroke: true
        })
    },
    onEachFeature: onEachFeature,
    
  });

  // Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
}

function createMap(earthquakes) {

//Adding depth color legend to map layer
  var legend = L.control({position: 'bottomright'});
    legend.onAdd = function () {
    
        var div = L.DomUtil.create('div', 'info legend'),
            depth = [-10, 10, 30, 50, 70, 90];
            
        // loop through depth values to generate the correct colors for the legend
        for (var i = 0; i < depth.length; i++) {
            div.innerHTML +=
                '<i style="background:' + depth_color(depth[i] + 1) + '"></i> ' +
                depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
        }
    
        return div;
    };
    
    
  // Define streetmap and darkmap layers
  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  });   

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Light Map": lightmap,
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map, giving it the lightmap and earthquakes layers to display on load
  var myMap = L.map("mapid", {
    center: [15.5994, -53.6731],
    zoom: 3,
    layers: [lightmap, earthquakes]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control and legend to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: true
  }).addTo(myMap);
  legend.addTo(myMap);
}
