import Layout from "../components/Layout";
import { useState, useEffect } from "react";

const Registro = () => {
  const [asesores,setAsesores] = useState([])

  useEffect(() => { 
    fetch("/api/docente")
    .then((res)=> res.json())
    .then((json)=> setAsesores(json))
  }, [])

  const addDocente = () => {
    const payload = {
      apellidoMat: 'asdasd', apellidoPat: 'asd', codigo, contrasena, correo, foto, nombre
    }
    fetch("/api/docente", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
    .then((res)=> res.json())
    .then((json)=> setAsesores(json))
  }

  const submitRegistro = () => {
    const payload = {
      fechaRegistro: new Date(),
      observacion: "",
      urldocumento,
      estado,
      id,
      docenteCodigo,
    };

    fetch("/api/etapa1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error))
      .then((json) => console.log(json));
  };

  return (
    <Layout>
      <div className=" flex flex-col h-full font-serif text-left text-xl bg-white">
        <form className="m-auto">
        <div className=" ml-80 pl-80 font-serif text-xl text-black-600">
            <p className="  ">
              Etapas:
              <select
                name="select"
                className="font-serif ml-2  rounded-full text-black-600 w-auto outline-double outline-3 outline-offset-2 ..."
              >
                <option value="etapa1">Etapa 1: Planteamiento del problema </option>
                <option value="etapa2">Etapa 2: Resumen del protyecto </option>
                <option value="etapa3">Etapa 3: Documentación final </option>
              </select>
            </p>
          </div>
          <p className="font-serif text-xl pt-20 text-black">
            Escribe el nombre del proyecto:
            <input
              type="text"
              className="ml-2 w-80 text-black rounded-full outline-double outline-3 outline-offset-2 ..."
            ></input>
          </p>
          <p className="font-serif text-xl pt-7 text-black">
            Elige el archivo PDF que deseas subir:
            <input type="file" className="ml-2 text-black rounded-full outline-double outline-3 outline-offset-2 ..."></input>
          </p>
          <p
            id="asesor2Box"
            className="font-serif text-left text-xl pt-7 text-black"
          >
            Asesor:
            <select
              name="select"
              className="font-serif ml-2 text-center rounded-full bg-white text-black w-auto pr-5 outline-double outline-3 outline-offset-2 ..."
            >
              <option value="nothing">Selecciona... </option>
            </select>
            <a
              id="modulo2Box"
              className="font-serif ml-7 text-left text-xl pl-0 pt-5 text-black "
            >
              Modulo:
              <select
                name="select"
                className="font-serif ml-2 text-center rounded-full bg-white text-black w-auto outline-double outline-3 outline-offset-2 ..."
              >
                <option value="nothing">Selecciona... </option>
                <option value="etapa1"> Modulo 1 </option>
                <option value="etapa2"> Modulo 2 </option>
                <option value="etapa3"> Modulo 3 </option>
              </select>
            </a>
          </p>
          <div className="ml-96">
            <p className="pt-20 ml-96 text-white">
              <button className="font-serif rounded left ml-10 w-32 h-12 transition bg-blue-900 hover:-translate-y-1 hover:scale-110 hover:bg-blue duration-150">
                Registrar
              </button>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Registro;
