'use strict'
var express=require('express');
var bodyParser=require('body-parser');

var app =express();
// cargar rutas
var user_routes=require('./routes/user');
// midlewares de body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabecera y cors

// ruta base
app.use('/api',user_routes);


module.exports=app;