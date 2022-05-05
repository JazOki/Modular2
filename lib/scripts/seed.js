// seed para poder hacer acciones de prueba:
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

const main = async () => {
    await prisma.proyectoE1.create({ // Create many para insertar varios registros
        data:
        {
            nombre: 'Jose',
            apellidoPat: 'Navarro',
            apellidoMat: 'Rios',
            correo: 'navarro@universidad-une.com',
            foto: '',
            contrasena: 'navarro',

        }
    })
}

main()