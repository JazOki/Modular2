import Layout from "../components/Layout";
import React, { useState } from "react";

const Consultas = () => {

  //   const submitRegistro = () => {
  //     const payload = {
  //       fechaRegistro: new Date(),
  //       observacion: "",
  //       urldocumento,
  //       estado,
  //       id,
  //       docenteCodigo,
  //     };

  //     fetch("/api/etapa1", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     })
  //       .then((response) => response.json())
  //       .catch((error) => console.log(error))
  //       .then((json) => console.log(json));
  //   };

  return (
    <Layout nombre="Jazmin" matricula="A03440" codigo="Y1923553">
      <div className=" flex flex-col h-full font-serif text-left text-xl bg-gray-600">
        <p className="mr-79 ml-auto pt-20 pr-10 font-serif text-xl text-white">
          Etapas:
          <select
            name="select"
            className="font-serif ml-2 text-center rounded-full bg-white text-black w-auto"
          >
            <option value="etapa1">Etapa 1: Planteamiento del problema </option>
            <option value="etapa2">Etapa 2: Resumen del protyecto </option>
            <option value="etapa3">Etapa 3: Documentación final </option>
          </select>
        </p>
        <form className="m-auto">
          <p
            id="asesor2Box"
            className="font-serif text-left text-xl pt-7 text-white"
          >
            Estado:
            <input
              type="text"
              className=" pl-5 ml-2 w-80 text-black rounded-full"
            ></input>
            <a
              id="modulo2Box"
              className="font-serif ml-7 text-left text-xl pl-0 pt-5 text-white"
            >
              Módulo:
              <input
                type="text"
                className="ml-2 w-80 text-black rounded-full"
              ></input>
            </a>
          </p>
          <p>

          </p>
          <p className="font-serif text-xl pt-7 text-white">
            Fecha de registro:
            <input type="text" className="ml-2 w- text-black rounded-full"></input>
          </p>
          <p
            id="asesor2Box"
            className="font-serif text-left text-xl pt-7 text-white"
          >
            Nombre del documento:
            <input
              type="text"
              className=" pl-5 ml-2 w-70 text-black rounded-full"
            ></input>
            <a
              id="modulo2Box"
              className="font-serif ml-7 text-left text-xl pl-0 pt-5 text-white"
            >
              Archivo PDF registrado:
              <input
                type="text"
                className=" pl-5 ml-2 w-80 text-black rounded-full"
              ></input>
            </a>
          </p>
          <p className="pt-5">
            <table className="table-fixed font">
              <thead>
                <tr>
                  <th className="border border-white px-4 py-2 text-white">Nombre</th>
                  <th className="border border-white px-4 py-2 text-white">Apellido materno</th>
                  <th className="border border-white px-4 py-2 text-white">Apellido paterno</th>
                  <th className="border border-white px-4 py-2 text-white">Código</th>
                  <th className="border border-white px-4 py-2 text-white">Matrícula</th>
                  <th className="border border-white px-4 py-2 text-white">Correo electrónico</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td >The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                </tr>
                <tr>
                  <td>Witchy Woman</td>
                  <td>The Eagles</td>
                  <td>1972</td>
                </tr>
                <tr>
                  <td>Shining Star</td>
                  <td>Earth, Wind, and Fire</td>
                  <td>1975</td>
                </tr>
              </tbody>
            </table>
          </p>
          <p className="pt-20 ml-96">
            <button className=" text-black font-serif rounded left ml-10 w-32 h-12  transition bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-150">
              Registrar
            </button>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Consultas;
