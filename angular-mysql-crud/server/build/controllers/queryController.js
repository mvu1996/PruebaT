"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryController = void 0;
class QueryController {
    index(req, res) {
        res.send("INDEX QUERY");
    }
}
exports.queryController = new QueryController();
