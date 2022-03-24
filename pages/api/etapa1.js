import {get,post,put} from "../../backend/controladores/etapa1Controller";

export default function proyectoE1(req, res){
    switch (req.method) {
        case 'GET':
            get(req, res)
            break;
        case 'POST':
            post(req, res)
            break;

        case 'PUT':
            put(req, res)
            break;

        default:
            res.status(400).json({})
            break;
    }
}