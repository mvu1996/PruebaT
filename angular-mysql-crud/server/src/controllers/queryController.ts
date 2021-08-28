import {Request,Response} from 'express';
class QueryController {

   index(req: Request, res: Response){
    res.send("INDEX QUERY")
   } 
}
export const queryController = new QueryController();