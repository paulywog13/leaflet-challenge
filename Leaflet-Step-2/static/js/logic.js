
//   Store API query variables
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
// Tectonic Plates URL from instructions github page at: https://github.com/fraxen/tectonicplates.
var tect_platesUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"
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
            radius: (feature.properties.mag) * 50000,
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

var legend = L.control({position: 'bottomright'});

    legend.onAdd = function () {
    
        var div = L.DomUtil.create('div', 'info legend'),
            depth = [-10, 10, 30, 50, 70, 90];
            
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < depth.length; i++) {
            div.innerHTML +=
                '<i style="background:' + depth_color(depth[i] + 1) + '"></i> ' +
                depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
        }
    
        return div;
    };
    
  //Creating a varieble to gather tectonic plates data from the URL  
  var tectPlates = new L.LayerGroup();
  // Perform a GET request to the Tectonic Plates URL
  d3.json(tect_platesUrl, function(tectplatesData) {
    console.log(tectplatesData);
    // Create a GeoJSON Layer for the tectonic plates data
    L.geoJson(tectplatesData, {
      color: " rgb(107, 39, 39)",
      weight: 2
    // Add tectonic plates data to tectPlates LayerGroup 
    }).addTo(tectPlates);
  });

  // Define streetmap, darkmap, satellitemap, and outdoormap layers
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
  });

  var satellitemap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "satellite-v9",
    accessToken: API_KEY
  });

  var outdoorsmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "outdoors-v11",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Satellite Map": satellitemap,
    "Outdoors Map": outdoorsmap,
    "Dark Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Earthquakes: earthquakes,
    "Tectonic Plates": tectPlates
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("mapid", {
    center: [15.5994, -53.6731],
    zoom: 3,
    layers: [streetmap, earthquakes, tectPlates]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
  legend.addTo(myMap);
  tectPlates.addTo(myMap);
}
