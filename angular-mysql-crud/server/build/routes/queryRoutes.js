"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const queryController_1 = __importDefault(require("../controllers/queryController"));
class QueryRoutes {
    //ejecutar metodo config
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/get', queryController_1.default.list);
        this.router.post('/create', queryController_1.default.create);
        this.router.post('/createPedido', queryController_1.default.createPedido);
    }
}
//instancia clase
exports.default = new QueryRoutes().router;
