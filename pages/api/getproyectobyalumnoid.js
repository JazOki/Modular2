import { prisma } from "../../lib/prisma";

export default async function (req, res){
    //if (req.method != 'GET') return res.status(400).send('Metodo no soportado')
    const {
        matricula
    } = req.query
    if (!matricula) return res.status(400).send('')
    // const alumno = await prisma.Alumno.findUnique({
    //     where: {
    //         matricula
    //     }
    // })
    const alumno = await prisma.Alumno.findUnique({
        where: {
            matricula
        },
        include:{
            proyectoE1: {
                include:{
                    docente:true
                }
            },
            ProyectoE2: {
                include:{
                    docente:true
                }
            },
            ProyectoE3: {
                include:{
                    docente:true
                }
            }
        }
    })
    res.json({Alumno:alumno})
}