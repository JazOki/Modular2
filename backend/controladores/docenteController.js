import { prisma } from "../../lib/prisma";

export const get = async (req, res) => {
    const docentes = await prisma.docente.findMany()
    res.json(docentes)
}

export const post = async (req, res) => {
    const {
        apellidoMat, apellidoPat, codigo, contrasena, correo, foto, nombre
    } = req.body
    const user = await prisma.docente.create({
        data: {
            apellidoMat, apellidoPat, codigo, contrasena, correo, foto, nombre
        }
    })
    res.json(user)
}

export const put = async (req, res) => {
    const {
        apellidoMat, apellidoPat, codigo, contrasena, correo, foto, nombre
    } = req.body
    const user = await prisma.docente.update({
        data: {
            apellidoMat, apellidoPat, contrasena, correo, foto, nombre
        },
        where: {
            codigo
        }
    })
    res.json(user)
}