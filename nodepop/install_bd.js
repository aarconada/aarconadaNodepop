"use strict";

var mongo = require('mongodb').MongoClient;
var sha256 = require('sha256');

mongo.connect('mongodb://localhost:27017/nodepop', function (err, db) {
   if (err){
       process.exit(1);
       return;
   }
    //Borrar las tablas que existan con un collection Drop
    if (db.collection('anuncios')) {
        db.collection('anuncios').drop();
    }


    //Crear la colección
    db.collection('anuncios').insert({
        "nombre": "Bicicleta",
        "venta": true,
        "precio": 230.15,
        "foto": "bici.jpg",
        "tags": [ "lifestyle", "motor"]
    });

    db.collection('anuncios').insert(
        {
            "nombre": "iPhone 3GS",
            "venta": false,
            "precio": 50.00,
            "foto": "iphone.png",
            "tags": [ "lifestyle", "mobile"]
        }
    );

    //Crear usuario de prueba:
    if(db.collection('usuarios')){
        db.collection('usuarios').drop();
    }
    db.collection('usuarios').insert({
        "nombre": "usuario1",
        "email" : "usuario@mail.com",
        "clave" : sha256('12345')
        }
    );


});




//Inicializar la base de datos insertando el contenido del fichero anuncios.json


//Para llamar a este script:
    //load('ruta/install_db.js');