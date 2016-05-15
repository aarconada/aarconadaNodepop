"use strict";

var mongoose = require('mongoose');
var conn = mongoose.connection;

//Verificar la conexión a mongoose

conn.on('error', console.log.bind(console,'error connecting to mongoDb!'));

conn.once('open', function(){
    console.log('Connected to mongoDb')
});

//Conectar a la base de datos

mongoose.connect('mongodb://localhost:27017/nodepop');