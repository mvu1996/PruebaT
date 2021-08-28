import { Router } from 'express';
import { queryController } from "../controllers/queryController";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //router es un objeto para las rutas
class QueryRoutes {
    //ejecutar metodo config
    public router : Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        // this.router.get("./", QueryController);
    }


}
//instancia clase
const queryRoutes = new QueryRoutes();