"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
//Anuncios model
var Anuncio = mongoose.model('Anuncio');

//Authentication
var jwtAuth = require('../../../lib/jwtAuth');

//Athentincation method
router.use(jwtAuth());

//Método get para hacer petición
router.get('/',function (req, res,next) {
    var name = req.query.name;
    //donde empieza la consulta
    var start = parseInt(req.query.start) || 0;
    //límite de búsquedas o cantidad de resultados
    var limit = parseInt(req.query.limit) || null;
    var sort = req.query.sort || null;

    var criteria = {};

    if (typeof name !== 'undefined') {
        criteria.name = name;
    }

    Anuncio.list(criteria, start, limit, sort, function (err, rows) {
        if (err) {
            return res.json({success: false, error: err});
        }
        res.json({success: true, rows: rows});
    });
});

//Método para postear nuevos objetos en la base de datos
 router.post('/', function (req,res){
  var anuncio = new Anuncio(req.body);
    
    //Control de errores en introducción de datos
    try {
        var errors = anuncio.validateSync();
    } catch (err){
        console.log('errors', errors);
        next(err);
    }
    anuncio.save(function (err,saved){
        if(err){
            //Si falla saltamos todos los middlewares y vamos directamente al de error
            next(err);
            return;
        }
        //Sitodo ha ido bien devolvemos el JSON
        res.json({success:true , saved: saved});
    });
    
});

//Exportamos el módulo
module.exports = router;