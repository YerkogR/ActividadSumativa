"use strict";
var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var hostname = '127.0.0.1';
var port = 3016;
app.use(cors());
app.use(urlencodedParser);
app.use(jsonParser);
app.get('/notas', function (req, res) {
    var archivo = fs.readFileSync('notas.json');
    var notas = JSON.parse(archivo);
    res.send(notas);
});
app.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
