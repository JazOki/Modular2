import { prisma } from "../../lib/prisma"

export const get = async (req, res) => {
    const alumnos = await prisma.alumno.findMany()
    res.json(alumnos)
}

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

export const put = async (req, res) => {
    const {
        apellidoMat, apellidoPat, codigo, contrasena, correo, foto, matricula, nombre, docenteCodigo, isEnable
    } = req.body
    const user = await prisma.alumno.update({
        data: {
            apellidoMat, apellidoPat, contrasena, correo, foto, matricula, nombre, docenteCodigo, isEnable
        },
        where: {
            codigo
        }
    })
    res.json(user)
}