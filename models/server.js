const express = require('express');
var cors = require('cors');



class Server {
    constructor() {
        // a esta instancia se tiene acceso al this.variable
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';
        // Middlewares
        this.middlewares();
        // Rutas
        this.routes();
    }

    // Middlewares
    middlewares() {

            //Cors

            this.app.use(cors());

            //lectura y parseo del body
            this.app.use(express.json());

            //Recurso estatico
            this.app.use(express.static('public'));

        }
        //se ejecuta desde el constructor
    routes() {
            //sE CONSTRUYE UN middleware con una ruta y el archivo a requerir
            this.app.use(this.usuariosRoutePath, require('../routes/usuarios.routes'));
        }
        //esta app se llama desde el app.js
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;