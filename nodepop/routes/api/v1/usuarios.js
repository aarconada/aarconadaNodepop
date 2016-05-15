"use strict";

var jwt = require('jsonwebtoken');
var config = require('../../../local_config');

var sha256 = require('sha256');
//
var express = require('express');
var router = express.Router();

//Ponemos el modelo
var Usuario = require('mongoose').model('Usuario');


router.post('/authenticate', function (req, res) {
    var correo = req.body.email;
    var clave = req.body.clave;
    clave = sha256(clave);
    
    //Posibles errores
    Usuario.findOne({email: correo}).exec(function (err,usuario) {
        //Error de conexión
        if(err){
            return res.status(500).json({success: false, error:err});
        }
        //No encuentra usuario
        if(!correo){
            return res.status(401).json({success: false, error:'Authentication failed. User not found'});
        }
        //contraseña incorrecta
        if (usuario.clave !== clave){
            return res.status(401).json({success: false, error:'Invalid password'});
        }
        //Guardar Token
        var token = jwt.sign({id: correo._id}, config.jwt.secret ,{expiresIn: '2 days'});

        res.json({success:true, token:token});
    });
});

router.post('/sign',function(req,res){

    var nombre = req.body.nombre;
    var email = req.body.email;
    var clave = req.body.clave ;

    clave = sha256(clave);

    var usuario = new Usuario({
        nombre: nombre,
        email:  email,
        clave: clave
    });

    try {
        var errors = usuario.validateSync();
    }catch (err) {
        console.log('errors', errors);
        next(err);
    }

    usuario.save(function (err, saved) {
        if(err){
            //saltamos todos los middlewares porque les mandamos un error y llega al middle
            //de error
            next(err);
            return;
        }
        res.json({success:true , saved: saved});
    });


});

module.exports = router;