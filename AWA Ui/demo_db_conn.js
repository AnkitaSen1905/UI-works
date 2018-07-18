/**
 * Script for dB connection and data visualisation.
 */
var mysql = require('mysql');
const fs = require('fs');
var con = mysql.createConnection({
  host: "141.100.60.82",
  user: "awa_user",
  password: "812463@bC",
  database: "AWA_MUM",
  port : "3306"
	  
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM ENERGY_DATA", function (err, result, fields) {
	    if (err) throw err;
	    console.log(result);
	    //var jsonObj = JSON.parse(result);
	    //console.log(jsonObj);
	    var jsonContent = JSON.stringify(result );
	    fs.writeFile("AWA_MUM.json", jsonContent, 'utf8', function (err) {
	        if (err) {
	            console.log("An error occured while writing JSON Object to File.");
	            return console.log(err);
	        }
	     
	        console.log("JSON file has been saved.");
	    });
	    
	  });
});






