"use strict";

var mongoose = require('mongoose');

//Schema
var anuncioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    venta: {
        type: Boolean,
        required: true
    },
    precio: {
        type: Number,
        required:true
    },
    foto: {
        type: String
    },
    tags:  {
        type: [String],
        enum: ['work','lifestyle', 'motor', 'mobile']
    }
});

anuncioSchema.statics.list = function (filter, start, limit, sort, cb) {
    //para filtrar
    var query = Anuncio.find(filter);
    //para empezar en un número determinado si hay muchos resultados
    query.skip(start);
    //paginación, o número de resultados que muestro
    query.limit(limit);
    //para ordenar
    query.sort(sort);
    //para ver los errores
    return query.exec(cb);
};


var Anuncio = mongoose.model('Anuncio',anuncioSchema);