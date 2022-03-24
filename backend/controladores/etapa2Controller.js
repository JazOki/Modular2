import { prisma } from "../../lib/prisma";

// Obtener:
export const get = async (req, res) => {
    const proyectos = await prisma.proyectoE2.findMany()
    res.json(proyectos)
}

// Insercion:
export const post = async (req, res) => {
    const {
        fechaRegistro, observacion, urldocumento, estado, evaluacion, id
    } = req.body
    const proyecto = await prisma.proyectoE2.create({
        data: {
            fechaRegistro, observacion, urldocumento, estado, evaluacion, id
        }
    })
    res.json(proyecto)
}

// Actualizar:
export const put = async (req, res) => {
    const {
        fechaRegistro, observacion, urldocumento, estado, evaluacion, id
    } = req.body
    const proyecto = await prisma.proyectoE2.update({
        data: {
            fechaRegistro, observacion, urldocumento, estado, evaluacion
        },
        where: {
            id
        }
    })
    res.json(proyecto)
}