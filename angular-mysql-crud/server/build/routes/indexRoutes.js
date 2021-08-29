"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //router es un objeto para las rutas
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    //ejecutar metodo config
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index);
    }
}
//instancia clase
exports.default = new IndexRoutes().router;
