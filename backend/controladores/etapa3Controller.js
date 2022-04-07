import { prisma } from "../../lib/prisma";

// Obtener:
export const get = async (req, res) => {
    const proyectos = await prisma.proyectoE3.findMany()
    res.json(proyectos)
}

// Insercion:
export const post = async (req, res) => {
    const {
        fechaRegistro, observacion, urldocumento, estado, id, docenteCodigo, nombre
    } = req.body
    const proyecto = await prisma.proyectoE3.create({
        data: {
            fechaRegistro, observacion, urldocumento, estado, id, nombre,
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
        fechaRegistro, observacion, urldocumento, estado, id, nombre
    } = req.body
    const proyecto = await prisma.proyectoE3.update({
        data: {
            fechaRegistro, observacion, urldocumento, estado, nombre
        },
        where: {
            id
        }
    })
    res.json(proyecto)
}