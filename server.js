var express = require('express');
var path = require('path');

var port = process.env.PORT || 3000;
var staticContentDirectory = path.join(__dirname, '/public');
var app = express();

app.use(express.static(staticContentDirectory));
app.listen(port, function() {
    console.log('Initialised server on port : ' + port);
    console.log('Serving files from : ' + staticContentDirectory)
});
