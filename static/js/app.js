// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with sighting value (datetime, city, state, country, shape, duration, comments)
  tableData.forEach(function(sighting) {
    var row = tbody.append("tr");

    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Create JS code to listen for date/time 
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click",runEnter);
form.on("submit",runEnter);

// Complete the event handler
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElementdate = d3.select("#datetime");
    var inputElementcity = d3.select("#city");
    var inputElementstate = d3.select("#state");
    var inputElementcountry = d3.select("#country");
    var inputElementshape = d3.select("#shape");

    // Get the value property of the input element
    var inputValuedate = inputElementdate.property("value");
    var inputValuecity = inputElementcity.property("value");
    var inputValuestate = inputElementstate.property("value");
    var inputValuecountry = inputElementcountry.property("value");
    var inputValueshape = inputElementshape.property("value"); 
  
    var filteredDatadate = tableData.filter(sighting => sighting.datetime === inputValuedate);
    var filteredDatacity = tableData.filter(sighting => sighting.city === inputValuecity);
    var filteredDatastate = tableData.filter(sighting => sighting.state === inputValuestate);
    var filteredDatacountry = tableData.filter(sighting => sighting.country === inputValuecountry);
    var filteredDatashape = tableData.filter(sighting => sighting.shape === inputValueshape);


    console.log(filteredDatadate);
    console.log(filteredDatacity);
    console.log(filteredDatastate);
    console.log(filteredDatacountry);
    console.log(filteredDatashape);


    var tbody = d3.select("tbody");

    tbody.html("")

    filteredDatadate.forEach(function(sighting) {
        var row = tbody.append("tr");
    
        Object.entries(sighting).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          var cell = row.append("td");
          cell.text(value);
        });
      });

    filteredDatacity.forEach(function(sighting) {
        var row = tbody.append("tr");
    
        Object.entries(sighting).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          var cell = row.append("td");
          cell.text(value);
        });
      });

    filteredDatastate.forEach(function(sighting) {
        var row = tbody.append("tr");
    
        Object.entries(sighting).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          var cell = row.append("td");
          cell.text(value);
        });
      });
      
    filteredDatacountry.forEach(function(sighting) {
        var row = tbody.append("tr");
    
        Object.entries(sighting).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          var cell = row.append("td");
          cell.text(value);
        });
      });  
    
    filteredDatashape.forEach(function(sighting) {
        var row = tbody.append("tr");
    
        Object.entries(sighting).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          var cell = row.append("td");
          cell.text(value);
        });
      });
};

