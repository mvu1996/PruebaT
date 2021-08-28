"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_2 = __importDefault(require("express"));
const indexRoutes_2 = __importDefault(require("./routes/indexRoutes"));
// import queryRoutes from './routes/queryRoutes';
const morgan_2 = __importDefault(require("morgan"));
const cors_2 = __importDefault(require("cors"));
class Server {
    //propiedad para guardar objeto propiedad express detipo aplicacion
    constructor() {
        this.app = (0, express_2.default)(); // devuelve un objeto express
        this.config(); //configura para inciar metodos
        this.routes();
    } //metodo que se ejecuta apenas se instancia la clase
    //metodo vacio para configurar el puerto
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_2.default)('dev')); //saber que hace el cliente
        this.app.use((0, cors_2.default)()); //permitir a angular hacer peticiones
        this.app.use(express_2.default.json()); //permite formatos json
        //this.app.use(express.urlencoded({extended: false})//en caso de enviar formulario html
        //si existe un puerto tomalo si no toma el 3000
    }
    //metodo para definir rutas de mi servidor
    routes() {
        this.app.use(indexRoutes_2.default);
        // this.app.use('/api/query', queryRoutes);
    }
    //metodo inicializar el seervidor(app.listen)
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
//inicializa clase
const server = new Server(); // devolver clase en un objeto
server.start();
