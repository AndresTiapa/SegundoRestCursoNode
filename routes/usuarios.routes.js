const { Router } = require('express');
const { usuariosGet, usuariosDelete, usuariosPost, usuariosPut, usuariosPutVacio } = require('../controllers/usuarios.controllers');
const router = Router();


// this.app.get('/dos', (req, res) => {
//     res.send('Hello II World!')
// });

//Se requiere una ultima configuracion en el SERVER
router.get('/', usuariosGet); // en este archivo ya no se tiene el this.app.
router.delete('/', usuariosDelete); // en este archivo ya no se tiene el this.app.
router.post('/', usuariosPost); // en este archivo ya no se tiene el this.app.
router.put('/:id', usuariosPut); // en este archivo ya no se tiene el this.app.
router.put('*', usuariosPutVacio); // en este archivo ya no se tiene el this.app.


//Ha cambiado la antigua forma de llamar a una funcion
/* router.put('/', (req, res) => { // en este archivo ya no se tiene el this.app.
    res.json({
        msg: 'este es un PUT  API'
    });
});
router.post('/', (req, res) => { // en este archivo ya no se tiene el this.app.
    res.json({
        msg: 'este es un  POST API'
    });
});
router.delete('/', (req, res) => { // en este archivo ya no se tiene el this.app.
    res.json({
        msg: 'este es un  DELETE API'
    });
}); */

module.exports = router;