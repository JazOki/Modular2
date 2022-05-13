import { prisma } from "../../lib/prisma";

export default async function (req, res) {
    //if (req != 'GET') return res.status(400).send('Metodo no soportado')
    const {
        id
    } = req.query
    if (!id) return res.status(400).send('')
    const proyecto1 = await prisma.ProyectoE1.findUnique({
        where: {
            id
        }
    })
    res.json({docenteCodigo:proyecto1.docenteCodigo})
}