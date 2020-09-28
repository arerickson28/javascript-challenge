// from data.js
var tableData = data;

//testing console
console.log("hello ufo")


//------------------------
//INITIAL FILLING OF TABLE
//------------------------


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


//--------------------------
//CODE FOR THE FILTER SEARCH
//--------------------------


var button = d3.select("#filter-btn");

//DEFINE FUNCTION TO HANDLE CLICK
function handleClick() 
{
    console.log("the button was clicked")
    
    
    //READING THE "ENTER A DATE" INPUT VALUE

    var inputElement = d3.select("#datetime") ;

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    //FILTERING DATA BY INPUT VALUE
    var filteredData = data.filter(ufo_sighting => ufo_sighting.datetime === inputValue);

    console.log(filteredData);

    //CLEARING EXISTING TABLE TO MAKE WAY FOR NEW FILTERED DATA

    var tbody = d3.select("tbody") ;
    tbody.html("") ;

    // CREATING NEW HTML TABLE WITH FILTERED DATA
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




