import {Request,Response} from 'express';

import pool from '../database';
class QueryController {
    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM tipotaza', function(err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO tipotazas set ?', [req.body]);
        res.json({ message: 'datos insertados' });
    }
}
const queryController = new QueryController;
export default queryController;