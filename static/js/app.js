// from data.js
var tableData = data;

//testing console
console.log("hello ufo")



//INITIAL FILLING OF TABLE
//Select area of HTML to enter data
var tbody = d3.select("tbody") ;

//forEach loop to fill the HTML table with data
data.forEach(function(ufo_sighting) 
{
    
    var row = tbody.append("tr") ;

    Object.entries(ufo_sighting).forEach(function([key, value]) 
        {

            var cell = row.append("td") ;
        
            cell.text(value) ;

        });

}) ;


//-----------------------
//CODE FOR THE FILTER SEARCH


// IDENTIFY THE 'FILTER TABLE' BUTTON IN HTML BY ID
//* <button id="filter-btn" type="button" class="btn btn-default">Filter Table</button> */

var button = d3.select("#filter-btn");

//DEFINE FUNCTION TO HANDLE CLICK
function handleClick() 
{
    console.log("the button was clicked")
    
    //READING THE "ENTER A DATE" INPUT VALUE
    //* <input class="form-control" id="datetime" type="text" placeholder="1/11/2011"> */
    var inputElement = d3.select("#datetime") ;

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    //FILTERING DATA BY INPUT VALUE
    var filteredData = data.filter(ufo_sighting => ufo_sighting.datetime === inputValue);

    console.log(filteredData);

    //CREATING NEW HTML TABLE WITH FILTERED DATA
    var tbody = d3.select("tbody") ;
    filteredData.forEach(function(selected_sightings) 

        {

            var row = tbody.append("tr") ;

            Object.entries(selected_sightings).forEach(function([key, value]) 
                {
        
                    var cell = row.append("td") ;
        
                    cell.text(value) ;

                });

  
        });
};


//ATTACH THE CLICK EVENT TO THE HANDLER FUNCTION

button.on("click", handleClick) ;




