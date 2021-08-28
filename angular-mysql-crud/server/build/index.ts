"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const queryRoutes_1 = __importDefault(require("./routes/queryRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    //propiedad para guardar objeto propiedad express detipo aplicacion
    constructor() {
        this.app = (0, express_1.default)(); // devuelve un objeto express
        this.config(); //configura para inciar metodos
        this.routes();
    } //metodo que se ejecuta apenas se instancia la clase
    //metodo vacio para configurar el puerto
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev')); //saber que hace el cliente
        this.app.use((0, cors_1.default)()); //permitir a angular hacer peticiones
        this.app.use(express_1.default.json()); //permite formatos json
        //this.app.use(express.urlencoded({extended: false})//en caso de enviar formulario html
        //si existe un puerto tomalo si no toma el 3000
    }
    //metodo para definir rutas de mi servidor
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/query', queryRoutes_1.default);
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
