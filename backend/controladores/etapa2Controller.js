import { prisma } from "../../lib/prisma";

// Obtener:
export const get = async (req, res) => {
    const proyectos = await prisma.proyectoE2.findMany()
    res.json(proyectos)
}

// Insercion:
export const post = async (req, res) => {
    const {
        fechaRegistro, observacion, urldocumento, estado, evaluacion, id, docenteCodigo, nombre
    } = req.body
    const proyecto = await prisma.proyectoE2.create({
        data: {
            fechaRegistro, observacion, urldocumento, estado, evaluacion, id, nombre,
            docente: {
                connect: {
                    codigo: docenteCodigo
                }
            }
        },
        include:{
            alumnos: true
        }
    })
    res.json(proyecto)
}

// Actualizar:
export const put = async (req, res) => {
    const {
        fechaRegistro, observacion, urldocumento, estado, evaluacion, id, nombre
    } = req.body
    const proyecto = await prisma.proyectoE2.update({
        data: {
            fechaRegistro, observacion, urldocumento, estado, evaluacion, nombre
        },
        where: {
            id
        }
    })
    res.json(proyecto)
}