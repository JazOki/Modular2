import { withIronSessionApiRoute } from "iron-session/next";
import {ironOptions} from './../../lib/ironSessionConfig'
import { prisma } from "../../lib/prisma";

export default withIronSessionApiRoute(login,ironOptions)

async function login(req,res){ // funcion asincrona con parametros
    const { correo, contrasena } = req.body  // traer correo y contrasenia del body

    if(!correo || !contrasena) // valida si faltan datos
        return res.status(400).json({error:'Falta de datos'})

    const alumno = await prisma.alumno.findFirst({ // FINDFIRST: para traer el primer elemento que coincida con la busqueda
        where:{ 
            AND:[
                {
                    correo
                },
                {
                    contrasena
                }
            ]
        }
    })
    console.log(alumno)
    if(!alumno) // Valida si esta el alumno
        return res.status(400).json({error:'No encontrado'})
        
    req.session.user=alumno;
    await req.session.save();
    res.json({ok:"ok"});
}