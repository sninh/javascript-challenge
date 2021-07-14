// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table body

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each UFO Sighting
tableData.forEach(function(sighting) {
    console.log(sighting);
 });

// // Step 2:  Use d3 to append one table row `tr` for each UFO Sighting
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
tableData.forEach(function(sighting) {
   console.log(sighting);
   var row = tbody.append("tr");
 });

// // Step 3:  Use `Object.entries` to console.log each UFO Sighting
tableData.forEach(function(sighting) {
   console.log(sighting);
   var row = tbody.append("tr");

   Object.entries(sighting).forEach(function([key, value]) {
     console.log(key, value);
   });
 });

var button = d3.select("#filter-btn");

// Select the form 
var form = d3.select(".form-group");

// Create an eventlistener to filter the table.
function runEnter() {
    //Clear out existing table
    tbody.html("");
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

  // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputvalue);
    console.log(tableData);

    
    var filteredInput = tableData.filter(data => data.datetime === inputValue);
    
    filteredInput.forEach(function(dateSelection){
        
        var row = tbody.append("tr");

        Object.entries(dateSelection).forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value);
        });
    });

};

