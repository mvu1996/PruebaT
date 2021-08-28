import { Router } from 'express';//router es un objeto para las rutas
class IndexRoutes {

    public router:  Router = Router();

    //ejecutar metodo config
    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/',(req, res) => res.send("Hello"));
    }
}
//instancia clase
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;