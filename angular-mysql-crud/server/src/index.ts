import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import queryRoutes from './routes/queryRoutes';
import morgan from 'morgan';
import cors from 'cors';
class Server {
    //inicia el servidor 
   public app: Application;
     //propiedad para guardar objeto propiedad express detipo aplicacion
    constructor(){ //inicializa express
        this.app = express(); // devuelve un objeto express
        this.config(); //configura para inciar metodos
        this.routes();
    }//metodo que se ejecuta apenas se instancia la clase

    //metodo vacio para configurar el puerto
    config(){
        this.app.set('port',process.env.PORT ||3000);
        this.app.use(morgan('dev'));//saber que hace el cliente
        this.app.use(cors());//permitir a angular hacer peticiones
        this.app.use(express.json());//permite formatos json
        //this.app.use(express.urlencoded({extended: false})//en caso de enviar formulario html
    //si existe un puerto tomalo si no toma el 3000
    }

    //metodo para definir rutas de mi servidor
    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/query', queryRoutes);
    }

    //metodo inicializar el seervidor(app.listen)
    start (): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));   
        });
    }
}
//inicializa clase
const server = new Server();// devolver clase en un objeto
server.start();