import {Request,Response} from 'express';

import pool from '../database';
class QueryController {
    public index (req: Request, res: Response){
        pool.query('Describe almacen')
    }
}
const queryController = new QueryController;
export default queryController;