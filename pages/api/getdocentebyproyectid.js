import { prisma } from "../../lib/prisma";

export default async function (req, res) {
    if (req != 'GET') return res.status(400).send('Metodo no soportado')
    const {
        ProyectoE1Id
    } = req.query
    const docente = await prisma.docente.findUnique({
        where: {
            ProyectoE1: {
                id: ProyectoE1Id
            }
        }
    })
    res.json({docenteCodigo:docente.codigo})
}