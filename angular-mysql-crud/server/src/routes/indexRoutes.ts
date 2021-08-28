import { Router } from 'express';//router es un objeto para las rutas

import  { indexController } from '../controllers/indexControler';

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
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;