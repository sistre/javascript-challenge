// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the tbody
var tbody = d3.select("tbody");

// Create event handlers 
button.on("click",runEnter);

// Populate the table with unfiltered data
tableData.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Clear the table data
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);
  
    // Filter the date to the input date
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    console.log(filteredData);
  
    // Populate the table with filtered data
    filteredData.forEach((ufoData) => {
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};