// seed para poder hacer acciones de prueba:
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

const main = async () => {
    await prisma.alumno.createMany({ // Create many para insertar varios registros
        data: [
            {
                nombre: 'Juan',
                apellidoPat: 'Gomez',
                apellidoMat: 'Gonzales',
                correo: 'a@universidad-une.com',
                foto: '',
                codigo: 'Y88888888',
                contrasena: '123456789',
                matricula: 'A22222'
            },
            {
                nombre: 'Aldo',
                apellidoPat: 'Chavez',
                apellidoMat: 'Castellanos',
                correo: 'e@universidad-une.com',
                foto: '',
                codigo: 'Y00000000',
                contrasena: '123456789',
                matricula: 'A11111'
            }
        ]
    })
}

main()