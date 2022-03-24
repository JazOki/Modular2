import { prisma } from "../../lib/prisma"

// Obtener:
export const get = async (req, res) => {
    const alumnos = await prisma.alumno.findMany()
    res.json(alumnos)
}

// Insercion:
export const post = async (req, res) => {
    const {
        apellidoMat, apellidoPat, codigo, contrasena, correo, foto, matricula, nombre
    } = req.body
    const user = await prisma.alumno.create({
        data: {
            apellidoMat, apellidoPat, codigo, contrasena, correo, foto, matricula, nombre
        }
    })
    res.json(user)
}

// Actualizar:
export const put = async (req, res) => {
    const {
        apellidoMat, apellidoPat, codigo, contrasena, correo, foto, matricula, nombre, docenteCodigo, isEnable
    } = req.body
    const user = await prisma.alumno.update({
        data: {
            apellidoMat, apellidoPat, contrasena, correo, foto, matricula, nombre, isEnable,
            docente:{
                connect:{
                    codigo: docenteCodigo
                }
            }
        },
        where: {
            codigo
        }
    })
    res.json(user)
}