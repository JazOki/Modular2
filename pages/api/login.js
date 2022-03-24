import { withIronSessionApiRoute } from "iron-session/next";
import {ironOptions} from './../../lib/ironSessionConfig'

export default withIronSessionApiRoute(login,ironOptions)

async function login(req,res){
    req.session.user={
        nombre:'Admin'
    };
    await req.session.save();
    res.json({ok:"ok"});
}