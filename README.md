# leaflet-challenge

The goal of part 1 of this challenge was to use JavaScript, mapbox, and leaflets to read in the json data about earthquake data then to dispay the data on html website using mapbox maps and leaflet markers. The map needed to display the data markers with their size based upon the magnitude of the earthquake and the color based upon the depth of the earthquake. I also needed to make it so when the user clicked on a data marker, a tooltip would display where the earthquake was along with the magnitude and depth information. There also needed to be a legend to describe what depths the colors represented.

The goal for part 2 of this challenge was to use the information in part 1 but also to include additional basemaps, layer controls, as well as a second overlay to the map showing the boundries for techtonic plates. The layer controls needed to allow the user to choose what earthquake and tectonic plate data to display if any.  

Files included in this challenge: logic.js(x2), index.html(x2), style.css, settings.json

Languages used: JavaScript, CSS, HTML

Sites used for maps and data: 
maps: https://api.mapbox.com/
earthquake data: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson
tectonic plates data: https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json

Additional Resources used: https://leafletjs.com/examples/choropleth/, 
https://stackoverflow.com/questions/48804842/leaflet-creating-layergroups-dynamically, https://github.com/fraxen/tectonicplates, https://docs.mapbox.com/api/maps/styles/


The first part of the challenge involved a combination of a few of the lessons we covered in class. The one part that required some research was creating the legend for earthquake depth. I was able to find a good example on the leafletjs.com site and I referenced the page above. 

The second part of the challenge was quite a bit more difficult as it involved adding a second layer on the map showing the boundries of the tectonic plates along with a map and layer control feature. I was able to find the coordinates data used for the tectonic plates at the github.com/fraxen site provided in the instructions and referenced. As we hadn't covered having multiple overlays in class or something similar to this activity, I did research options to help with this activity and found some useful information at the stackoverflow page referenced. There was not a type or number of mapbox maps specified in the instructions so I choose to use streetview, dark, sattelite, and outdoor. 

There is an unused/uncalled tectplates.js file in the Step-2 folder that I used as a tester file for tectonic plates overlay as I didn't want to create an issue on the logic.js earthquake file as this file was working properly. Once I had the code I needed for tectonic plates overlay, I added the code to the logic.js file. 

This was a very difficult challenge and the two most difficult parts were creating the legend on the first part of the challenge and adding the second overlay on the secont part. I enjoyed using an API Key again as it had been some time since we had used this process. It was good to have a refresher. 

