'use strict'
var express = require('express');



var app = express();

//Cargar archivos de rutas 

var project_routes  = require('./routes/project')

 

//middlewares

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Rutas
app.use('/', project_routes);



//Exportar

module.exports =app;