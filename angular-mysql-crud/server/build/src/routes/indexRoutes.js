"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_2 = require("express"); //router es un objeto para las rutas
const indexControler_1 = require("../controllers/indexControler");
class IndexRoutes {
    //ejecutar metodo config
    constructor() {
        this.router = (0, express_2.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indexControler_1.indexController.index);
    }
}
//instancia clase
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
