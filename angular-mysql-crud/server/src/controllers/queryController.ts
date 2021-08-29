import {Request,Response} from 'express';

import pool from '../database';
class QueryController {
    public async list (req: Request, res: Response) {
        await pool.query(`SELECT p.pedido_id,p.cantidadPiezas,tc.tipoTaza_id, tc.nombre AS tipotaza FROM pedido p
        LEFT JOIN tipotaza tc ON tc.tipoTaza_id = p.tipoTaza_id`, function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body)
        await pool.query("INSERT INTO almacen set ?", [req.body]);
        res.json({ message: 'datos insertados' });
    }

    public async createPedido(req: Request, res: Response): Promise<void> {
        await pool.query("INSERT INTO pedido set ?", [req.body]);
        res.json({ message: 'datos insertados' });
    }
}
const queryController = new QueryController;
export default queryController;