//conexion
import {Request,Response} from 'express';
import { Connection, createPool } from "promise-mysql";
import keys from "./keys";
//conectar a base de datos

export async function connect(req: Request, res: Response){
    const connection = createPool(keys.dataase);
    res.send("CONECTADO")
    return connection;
    
}

