"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //router es un objeto para las rutas
class IndexRoutes {
    //ejecutar metodo config
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send("Hello"));
    }
}
//instancia clase
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
