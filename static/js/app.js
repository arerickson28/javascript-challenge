// from data.js
var tableData = data;

// YOUR CODE HERE!

//Select area of HTML to enter data
var tbody = d3.select("tbody") ;

//forEach loop to fill the HTML table
data.forEach(function(ufo_sighting) {
    console.log(ufo_sighting) ;

    var row = tbody.append("tr") ;

    Object.entries(ufo_sighting).forEach(function([key, value]) {
        console.log(key, value);

        var cell = row.append("td") ;
        
        cell.text(value) ;

    });


}) ;
