import { Router } from 'express';//router es un objeto para las rutas

import  { queryController } from '../controllers/queryController';

class QueryRoutes {

    public router:  Router = Router();

    //ejecutar metodo config
    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', queryController.index);
    }
}
//instancia clase
const queryRoutes = new QueryRoutes();
export default queryRoutes.router;