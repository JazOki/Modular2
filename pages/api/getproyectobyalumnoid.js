import { prisma } from "../../lib/prisma";

export default async function (req, res){
    if (req.method != 'GET') return res.status(400).send('Metodo no soportado')
    const {
        matricula
    } = req.query
    if (!matricula) return res.status(400).send('')
    const alumno = await prisma.Alumno.findUnique({
        where: {
            matricula
        }
    })
    res.json({proyectoE1Id:alumno.proyectoE1Id})
}