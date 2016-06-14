var tds = require('tds');
var conn = new tds.Connection({
    host: 'localhost',
    // port: 1433,
    userName: 'root',
    password: 'toor'
});

conn.connect(function(error) {
    if (error != null) {
        console.log('Received error', error);
    } else {
        console.log('Now connected, can start using');
    }
//     var stmt = conn.createStatement('SELECT * FROM View_LiveVehicleSignal');
// //    To retrieve this row, listen to the event and execute the statement:
//     stmt.on('row', function(row) {
//         console.log('Received row: ', row.getValue(0));
//     });
//     stmt.execute();
});

//To receive messages and errors on the connection itself when a statement isn’t executing, listen for the events:

// conn.on('error', function(error) {
//     console.error('Received error', error);
// });
// conn.on('message', function(message) {
//     console.info('Received info', message);
//
// });
//
// conn.end();