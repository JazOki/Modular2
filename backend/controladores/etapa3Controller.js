import { prisma } from "../../lib/prisma";

// Obtener:
export const get = async (req, res) => {
    const proyectos = await prisma.proyectoE3.findMany()
    res.json(proyectos)
}

// Insercion:
export const post = async (req, res) => {
    const {
        fechaRegistro, observacion, urldocumento, estado, id
    } = req.body
    const proyecto = await prisma.proyectoE3.create({
        data: {
            fechaRegistro, observacion, urldocumento, estado, id
        }
    })
    res.json(proyecto)
}

// Actualizar:
export const put = async (req, res) => {
    const {
        fechaRegistro, observacion, urldocumento, estado, id
    } = req.body
    const proyecto = await prisma.proyectoE3.update({
        data: {
            fechaRegistro, observacion, urldocumento, estado
        },
        where: {
            id
        }
    })
    res.json(proyecto)
}