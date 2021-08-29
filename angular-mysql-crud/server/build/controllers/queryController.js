"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class QueryController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`SELECT p.pedido_id,p.cantidadPiezas,tc.tipoTaza_id, tc.nombre AS tipotaza FROM pedido p
        LEFT JOIN tipotaza tc ON tc.tipoTaza_id = p.tipoTaza_id`, function (err, result, fields) {
                if (err)
                    throw err;
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query("INSERT INTO almacen set ?", [req.body]);
            res.json({ message: 'datos insertados' });
        });
    }
    createPedido(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO pedido set ?", [req.body]);
            res.json({ message: 'datos insertados' });
        });
    }
}
const queryController = new QueryController;
exports.default = queryController;
