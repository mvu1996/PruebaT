"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_2 = require("express");
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //router es un objeto para las rutas
class QueryRoutes {
    constructor() {
        //ejecutar metodo config
        this.router = (0, express_2.Router)();
        this.config();
    }
    config() {
        // this.router.get("./", QueryController);
    }
}
//instancia clase
const queryRoutes = new QueryRoutes();
