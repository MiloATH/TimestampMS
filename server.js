var express = require('express');
var app = express();
var timezoneDiff = 14400;
var months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];

app.get("/:date", function(req, res) {
    var raw = req.params.date;
    var date;
    if(isNaN(raw)){//given string
         date = new Date(Date.parse(decodeURI(raw)));
    }
    else{//given unix
        date = new Date(+raw * 1000);
    }
    var ret = '{ "unix": ' + (date.getTime()/1000 - timezoneDiff)
                + ', "natural": "'+ months[date.getMonth()] + ' ' 
                + date.getDate() +', ' + date.getFullYear()+'" }';
    res.end(ret);
});

app.listen(8080, function () {
  console.log('Timestamp app listening on port 8080');
});