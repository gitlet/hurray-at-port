var sql = require('mssql');

sql.connect("mssql://DevUser:Admin@123@192.168.1.5:56617/Test").then(function() {
    // Query

    new sql.Request().query('select * from VehicleDetails').then(function (recordset) {
        console.log('Success..!');
        console.log(JSON.stringify(recordset));
    }).catch(function (err) {
        // ... query error checks
        console.log(err);
    });
});