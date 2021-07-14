// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table body

// Get a reference to the table body
var tbody = d3.select("tbody");

// // Step 2:  Use d3 to append one table row `tr` for each UFO Sighting
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
tableData.forEach(function(sighting) {
   //console.log(sighting);
   var row = tbody.append("tr");

   Object.entries(sighting).forEach(function([key, value]) {
    var cell = row.append("td")
    cell.text(value);
  });
});

var button = d3.select("#filter-btn");


// Select the form 
var form = d3.select(".form-group");

button.on("click", runEnter);
form.on("submit",runEnter);

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

    //console.log(inputvalue);

    
    var filteredInput = tableData.filter(data => data.datetime === inputValue);
    
    filteredInput.forEach(function(dateSelection){
        
        var row = tbody.append("tr");

        Object.entries(dateSelection).forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value);
        });
    });

};

