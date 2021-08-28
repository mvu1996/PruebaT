"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //router es un objeto para las rutas
const queryController_1 = require("../controllers/queryController");
class QueryRoutes {
    //ejecutar metodo config
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', queryController_1.queryController.index);
    }
}
//instancia clase
const queryRoutes = new QueryRoutes();
exports.default = queryRoutes.router;
