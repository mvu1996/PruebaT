import { Router } from 'express';
import { indexController } from "../controllers/indexControler";


//router es un objeto para las rutas
class IndexRoutes {
    //ejecutar metodo config
    public router : Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get("/", indexController.index);
    }


}
//instancia clase
const indexRoutes = new IndexRoutes();