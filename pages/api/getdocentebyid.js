import { prisma } from "../../lib/prisma";

export default async function (req, res) {
    if (req != 'GET') return res.status(400).send('Metodo no soportado')
    const {
        codigo
    } = req.query
    if (!id) return res.status(400).send('')
    const docente = await prisma.Docente.findUnique({
        where: {
            codigo
        }
    })
    res.json({nombreDocente: docente.nombre})
}