import express, { Router } from 'express';

import queryController from '../controllers/queryController';

class QueryRoutes {

    public router:  Router = Router();

    //ejecutar metodo config
    constructor(){
        this.config();
    }

    config() {
        this.router.get('/', queryController.list);
        this.router.post('/create', queryController.create);
    }
}
//instancia clase
export default new QueryRoutes().router;