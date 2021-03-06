import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from './../../lib/ironSessionConfig'
import { prisma } from "../../lib/prisma";

export default withIronSessionApiRoute(login, ironOptions) // Funcion que envuelve a login para generar cookies

async function login(req, res) { // funcion asincrona con parametros
    const { correo, contrasena } = req.body  // traer correo y contrasenia del body

    if (!correo || !contrasena) // valida si faltan datos
        return res.status(400).json({ error: 'Falta de datos' })

    const alumno = await prisma.alumno.findFirst({ // FINDFIRST: para traer el primer elemento que coincida con la busqueda
        where: { // Buscar donde correo y contrasenia coincidan con los datos enviados desde req.body:
            AND: [
                {
                    correo
                },
                {
                    contrasena
                }
            ]
        }
    })

    const docente = await prisma.docente.findFirst({ // FINDFIRST: para traer el primer elemento que coincida con la busqueda
        where: { // Buscar donde correo y contrasenia coincidan con los datos enviados desde req.body:
            AND: [
                {
                    correo
                },
                {
                    contrasena
                }
            ]
        }
    })

    const admin = await prisma.admin.findFirst({ // FINDFIRST: para traer el primer elemento que coincida con la busqueda
        where: { // Buscar donde correo y contrasenia coincidan con los datos enviados desde req.body:
            AND: [
                {
                    correo
                },
                {
                    contrasena
                }
            ]
        }
    })
    if (!alumno && !docente && !admin) // Valida si se encontro el usuario
        return res.status(400).json({ error: 'Usuario no encontrado' })

    // crear una sesion de usuario si lo encuentra:
    req.session.user = alumno ?? docente; // "??" para decirle que si no es alumno agarre docente como sesion
    if(alumno)
        req.session.role = 'alumno'
    else if(docente)
        req.session.role = 'docente'
    /*else if(admin)
        req.session.role = 'admin'*/
    await req.session.save(); // Guarda la sesion
    res.json({ ok: "ok" });
}