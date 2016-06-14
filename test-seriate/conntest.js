var sql = require("seriate");

var http = require( "http" );

var config = {
    "server": "86.96.194.194",
    "user": "jins",
    "password": "gl_programmer2",
    "database": "Tracking_db",
    "port": "1433"
};

sql.setDefaultConfig( config );


//var myTable = "MyTable";
// sql.execute( {
//     query: "CREATE TABLE my_demo (id int, fName VARCHAR(50), lName VARCHAR(50) )"
// });
// sql.execute( {
//     query: "INSERT INTO my_demo (id, fName, lName) VALUES (1, 'user', 'hi') "
// });
// sql.execute( {
//     query: "SELECT * FROM my_demo"
// }).then(function (err, res) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// });
// var server = http.createServer(function(req,res){
//     return sql.execute( {
//         query: "SELECT * FROM View_LiveVehicleSignal"
//     } ).then( function( results ) {
//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.end( JSON.stringify( results ) );
//     } ).catch( function( err ) {
//         res.writeHead(500, {"Content-Type": "text/plain"});
//         res.end(JSON.stringify(err));
//     } );
// } );

// server.listen(8080);

sql.execute( {
    query: "SELECT TOP 5 * FROM View_LiveVehicleSignal"
} ).then( function( results ) {
    console.log( results );
}, function( err ) {
    console.log( "Sorry, some problem with the conn:", err );
} );


// var myTable = "MyTable";
// sql.execute( {
//     query: "SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = @View_LiveVehicleSignal",
//     params: {
//         tableName: {
//             type: sql.NVARCHAR,
//             val: myTable,
//         }
//     }
// } ).then( function( results ) {
//     console.log( results );
// }, function( err ) {
//     console.log( "Still some errors..:", err );
// } );