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
      <div className=" flex flex-col h-full font-serif text-left text-xl bg-white-600">
        <p className="mr-79 ml-auto pt-20 pr-10 font-serif text-xl text-black ">
          Etapas:
          <select
            name="select"
            className="font-serif ml-2  rounded-full bg-white text-black w-auto outline-double outline-3 outline-offset-2 ..."
          >
            <option value="etapa1">Etapa 1: Planteamiento del problema </option>
            <option value="etapa2">Etapa 2: Resumen del protyecto </option>
            <option value="etapa3">Etapa 3: Documentación final </option>
          </select>
        </p>
        <form className="m-auto">
          <p
            id="asesor2Box"
            className="font-serif text-left text-xl pt-7 text-black"
          >
            Estado:
            <input
              type="text"
              className=" pl-5 ml-2 w-80 text-black rounded-full outline-double outline-3 outline-offset-2 ..."
            ></input>
            <a
              id="modulo2Box"
              className="font-serif ml-7 text-left text-xl pl-0 pt-5 text-black"
            >
              Módulo:
              <input
                type="text"
                className="ml-2 w-80 text-black rounded-full outline-double outline-3 outline-offset-2 ..."
              ></input>
            </a>
          </p>
          <p>

          </p>
          <p className="font-serif text-xl pt-7 text-black">
            Fecha de registro:
            <input type="text" className="ml-2 w- text-black rounded-full outline-double outline-3 outline-offset-2 ..."></input>
          </p>
          <p
            id="asesor2Box"
            className="font-serif text-left text-xl pt-7 text-black"
          >
            Nombre del documento:
            <input
              type="text"
              className=" pl-5 ml-2 w-70 text-black rounded-full outline-double outline-3 outline-offset-2 ..."
            ></input>
            <a
              id="modulo2Box"
              className="font-serif ml-7 text-left text-xl pl-0 pt-5 text-black"
            >
              Archivo PDF registrado:
              <input
                type="text"
                className=" pl-5 ml-2 w-80 text-black rounded-full outline-double outline-3 outline-offset-2 ..."
              ></input>
            </a>
          </p>
          <div>
            <p className="pt-24">
              <table class="table-fixed border-separate border border-slate-400 ... border-blue-600">
                <thead>
                  <tr className="border-blue-600 px-4 py-2 text-black">
                    <th className="border border-blue-600 border-slate-300 ...">Nombre</th>
                    <th className="border border-blue-600 border-slate-300 ...">Apellido paterno</th>
                    <th className="border border-blue-600 border-slate-300 ...">Apellido materno</th>
                    <th className="border border-blue-600 border-slate-300 ...">Código</th>
                    <th className="border border-blue-600 border-slate-300 ...">Matrícula</th>
                    <th className="border border-blue-600 border-slate-300 ...">Correo electrónico</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-blue-600 px-4 py-2 text-black">
                    <td className="border border-blue-600 border-slate-300 ...">Silvia Jazmin  </td>
                    <td className="border border-blue-600 border-slate-300 ...">Castellanos</td>
                    <td className="border border-blue-600 border-slate-300 ...">Ornelas</td>
                    <td className="border border-blue-600 border-slate-300 ...">Y19832996</td>
                    <td className="border border-blue-600 border-slate-300 ...">A03340</td>
                    <td className="border border-blue-600 border-slate-300 ...">A03440@universidad-une.com</td>
                  </tr>
                  <tr className="border-blue-600 px-4 py-2 text-black">
                    <td className="border border-blue-600 border-slate-300 ...">Miriam Tamara  </td>
                    <td className="border border-blue-600 border-slate-300 ...">Hernández</td>
                    <td className="border border-blue-600 border-slate-300 ...">Garcia</td>
                    <td className="border border-blue-600 border-slate-300 ...">Y19833046</td>
                    <td className="border border-blue-600 border-slate-300 ...">A03324</td>
                    <td className="border border-blue-600 border-slate-300 ...">A03324@universidad-une.com</td>
                  </tr>
                  <tr className="border-blue-600 px-4 py-2 text-black">
                    <td className="border border-blue-600 border-slate-300 ...">Andrea Sarai  </td>
                    <td className="border border-blue-600 border-slate-300 ...">Valdivia</td>
                    <td className="border border-blue-600 border-slate-300 ...">Mártinez</td>
                    <td className="border border-blue-600 border-slate-300 ...">Y10554314</td>
                    <td className="border border-blue-600 border-slate-300 ...">A06442</td>
                    <td className="border border-blue-600 border-slate-300 ...">A06442@universidad-une.com</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </div>
          <div className="ml-96">
            <p className="pt-7 ml-96 text-white">
              <button className="font-serif rounded left ml-10 w-32 h-12 transition bg-blue-900 hover:-translate-y-1 hover:scale-110 hover:bg-blue duration-150">
                Modificar
              </button>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Consultas;
