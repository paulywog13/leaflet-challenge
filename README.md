# leaflet-challenge

The goal of this challenge was to use JavaScript and D3 coding to read in the data of a csv file containing demographic data for all 50 states and then then to dispay the information on an html website using a D3 chart. The chart needed to display the data in a comparitive way and also needed to include the state abbreviations as identifiers.

Files included in this challenge: data.csv, app.js, app2.js, index.html, style.css, d3Style.css

Languages used: JavaScript, CSS, HTML

Additional Resources used: https://leafletjs.com/examples/choropleth/, 
https://stackoverflow.com/questions/48804842/leaflet-creating-layergroups-dynamically

The app.js file contains the core/first part of the challenge creating an interactive D3 Chart comparing each states' poverty percentage to it's obesity percentage data. Along with the state abbreviation for each data point, I included a mouseover and click function for each data point. The click function displays the state's toolTip data for each point on the chart.

The app2.js file contains the bonus/second part of the challenge creating an interactive D3 Chart comparing each states' poverty percentage, median age, and median income data to it's obesity percentage, smokers percentage, and healthcare percantage . Along with the state abbreviation for each data point, I included a mouseover function for each data point to expand the selected data point and display the state's toolTip data for the selected point on the chart.

My main takeaway from this challenge is that using JavaScript and D3 are great tools for processing and presenting data in so that it can be displayed in a easy to read and understand format. I enjoyed learning about and working with a variety of D3 graphing tools. I also enjoyed learning how to create interactive display methods and how they can be used to present the data in a user friendly way.

Creating the tooltip for each point on these chart was my favorite part of this challenge as it made the chart interactive and fun as well as a creative way display the data. I like that I also enjoyed creating the interactive chart on the bonus portion and it took some time and research to understand how to have each point's circle and state abbreviation text move together based upon with data set was selected.

The hardest part of the bonus chart was figuring out how to change the scale for each data set as the example from class only included changing one of the axes but our chart required changes to both axes. It was also difficult to think of the chart as being in quadrant 4 of an xy graph and understanding how to translate the data by flipping it.

I also added in some style.css code to update the display on the website including font and tooltip coloring to give the site some uniqueness and to be more eye catching. I also added some basic analysis information below the chart explaining the oberservations of the bonus chart data.

