var express = require('express');
var path = require('path');
var app = express();
var timezoneDiff = 0;// 14400;
var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var port = process.env.PORT || 3500;

app.get("/:date", function(req, res) {
    var raw = req.params.date;
    var date, json;
    if (isNaN(raw)) { //given string
        date = new Date(Date.parse(decodeURI(raw)));
    }
    else { //given unix
        date = new Date(+raw * 1000);
    }
    if( isNaN(date.getTime())){
        json ={unix: null, natural: null};
    }
    else{
    json = { unix: (date.getTime() / 1000 - timezoneDiff),
        natural: (months[date.getMonth()] + ' ' +
        date.getDate() + ', ' + date.getFullYear()) };
    }
    console.log(json);
    res.json(json);
});

app.get('/', function(req, res) {
    var file = path.join(__dirname, 'index.html');
    res.sendFile(file, function(err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', file);
        }
    });
});

app.listen(port, function() {
    console.log('Timestamp app listening on port '+port);
});