# leaflet-challenge

The goal of part 1 of this challenge was to use JavaScript, mapbox, and leaflets to read in the json data about earthquake data then to dispay the data on html website using mapbox maps and leaflet markers. The map needed to display the data markers with their size based upon the magnitude of the earthquake and the color based upon the depth of the earthquake. I also needed to make it so when the user clicked on a data marker, a tooltip would display where the earthquake was along with the magnitude and depth information. There also needed to be a legend to describe what depths the colors represented.

The goal for part 2 of this challenge was to use the information in part 1 but also to include additional basemaps, layer controls, as well as a second overlay to the map showing the boundries for techtonic plates. The layer controls needed to allow the user to choose what earthquake and tectonic plate data to display if any.  

Files included in this challenge: logic.js(x2), index.html(x2), style.css, settings.json

Languages used: JavaScript, CSS, HTML

Additional Resources used: https://leafletjs.com/examples/choropleth/, 
https://stackoverflow.com/questions/48804842/leaflet-creating-layergroups-dynamically, https://github.com/fraxen/tectonicplates, https://docs.mapbox.com/api/maps/styles/


The first part of the challenge involved a combination of a few of the lessons we covered in class. The one part that required some research was creating the legend for earthquake depth. I was able to find a good example on the leafletjs.com site and I referenced the page above. 

The second part of the challenge was quite a bit more difficult as it involved adding a second layer on the map showing the boundries of the tectonic plates along with a map and layer control feature. I was able to find the coordinates used for the plates at "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json" which I found at the github.com/fraxen site proved in the instructions. As we hadn't covered having multiple overlays in class or something similar to this activity, I did research options to help with this activity and found some useful information at the stackoverflow page referenced. There was not a number of maps amount required in the instructions so I choose to use streetview, dark, sattelite, and outdoor. 

This was a very difficult chal.

Creating the tooltip for each point on these chart was my favorite part of this challenge as it made the chart interactive and fun as well as a creative way display the data. I like that I also enjoyed creating the interactive chart on the bonus portion and it took some time and research to understand how to have each point's circle and state abbreviation text move together based upon with data set was selected.

The hardest part of the bonus chart was figuring out how to change the scale for each data set as the example from class only included changing one of the axes but our chart required changes to both axes. It was also difficult to think of the chart as being in quadrant 4 of an xy graph and understanding how to translate the data by flipping it.

I also added in some style.css code to update the display on the website including font and tooltip coloring to give the site some uniqueness and to be more eye catching. I also added some basic analysis information below the chart explaining the oberservations of the bonus chart data.

