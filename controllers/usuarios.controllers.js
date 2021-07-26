 const { response, request } = require('express');

 const usuariosGet = (req = request, res = response) => {
     const { edad = 'no especifica', nombre = 'Sin Nombre', sexo = 'No especifica' } = req.query;
     res.json({
         msg: 'este es un GET  API - Controlador',
         edad,
         nombre,
         sexo
     });
 }

 const usuariosPut = (req, res = response) => {
     const id = req.params.id;
     res.json({
         msg: 'este es un Put  API - Controlador',
         id
     });
 }

 const usuariosPutVacio = (req, res = response) => {
     const id = req.params.id;
     res.status(404).send('Ruta no existe!');
 }

 const usuariosPost = (req, res = response) => {
     const { nombre, edad } = req.body;
     res.json({
         msg: 'este es un Post API - Controlador',
         nombre,
         edad
     });
 }

 const usuariosDelete = (req, res = response) => {
     res.json({
         msg: 'este es un Delete  API - Controlador'
     });
 }

 module.exports = {
     usuariosGet,
     usuariosDelete,
     usuariosPost,
     usuariosPut,
     usuariosPutVacio
 }