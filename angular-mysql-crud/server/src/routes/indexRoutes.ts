import { Router } from 'express';//router es un objeto para las rutas

import  { indexController } from '../controllers/indexController';

class IndexRoutes {

    public router:  Router = Router();

    //ejecutar metodo config
    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index);
    }
}
//instancia clase
export default new IndexRoutes().router;