'use  strict'

var mongoose = require('mongoose');
var app = require('../Backend/app')
var port = 3800;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Portafolio')
  .then(()=>{
      console.log("Conexion Establecida con la base de datos")

      //Creacion Del servidor 
   app.listen(port, () =>{
     console.log("Servidor Corriendo Correctamente en la URL: localhost:3800")

   })

  }).catch(err => console.log(err));