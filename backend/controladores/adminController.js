import { prisma } from "../../lib/prisma";

export const get = async (req, res) => {
    const admins = await prisma.admin.findMany()
    res.json(admins)
}

export const post = async (req, res) => {
    const {
        apellidoMat, apellidoPat, contrasena, correo, foto, nombre, usuario
    } = req.body
    const user = await prisma.admin.create({
        data: {
            apellidoMat, apellidoPat, contrasena, correo, foto, nombre, usuario
        }
    })
    res.json(user)
}

export const put = async(req, res) => {
    const {
        apellidoMat, apellidoPat, contrasena, correo, foto, nombre, usuario, isEnable, id
    } = req.body
    const user = await prisma.admin.update({
        data: {
            apellidoMat, apellidoPat, contrasena, correo, foto, nombre, usuario, isEnable
        },
        where: {
            id
        }
    })
    res.json(user)
}