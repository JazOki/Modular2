import Layout from "../components/Layout";
import { useState, useEffect } from "react";

const Registro = () => {
  const [asesores, setAsesores] = useState([])

  useEffect(() => {
    fetch("/api/docente")
      .then((res) => res.json())
      .then((json) => setAsesores(json))
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
      .then((res) => res.json())
      .then((json) => setAsesores(json))
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
<<<<<<< HEAD
      <div className=" flex flex-col h-full font-serif text-left text-xl bg-slate-50">
        <form className=" m-auto bg-slate-300 ">
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2x1">
            <div class="md:flex">
              <div class="md:shrink-0">
                {/* <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/store.jpg" alt="Man looking at item at a store"> */}
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
              </div>
            </div>
          </div>

          {/* <div className=" ml-80 pl-80 font-serif text-xl text-black-600 ">
=======
      <div className=" flex flex-col w-screen h-screen font-serif text-left text-xl bg-slate-50 container mx-auto">
        <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div class="w-full max-w-md space-y-8">
            <form class="mt-8 space-y-6 " action="#" method="POST">
            {/* <div className=" ml-80 pl-80 font-serif text-xl text-black-600"> */}
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
                <p className="font-serif text-xl pt-20 text-black ">
                Escribe el nombre del proyecto:
                  <label for="nombreP" class="sr-only">Gestor de proyectos modulares</label>
                <input
                  type="text"
                  className="ml-2 w-80 text-black rounded-full outline-double outline-3 outline-offset-2 ..."
                ></input>
              </p>
              {/* </div> */}
              {/* <input type="hidden" name="remember" value="true"> */}
                <div class="-space-y-px rounded-md shadow-sm">
                  <div>
                    <label for="email-address" class="sr-only">Email address</label>
                    {/* <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"> */}
                  </div>
                  <div>
                    <label for="password" class="sr-only">Password</label>
                    {/* <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"> */}
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    {/* <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"> */}
                      <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                  </div>

                  <div class="text-sm">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                  </div>
                </div>

                <div>
                  <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                      {/* <!-- Heroicon name: mini/lock-closed --> */}
                      <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    Sign in
                  </button>
                </div>
            </form>
          </div>
        </div>
      </div>
      {/* <form className="m-auto">
          <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <div className=" ml-80 pl-80 font-serif text-xl text-black-600">
>>>>>>> 3872756280a98d8c57470f1c6ac4f8da57d4bdbd
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
<<<<<<< HEAD
              </div> */}

          {/* </div>
          </div> */}
          {/* <div class="container mx-auto">
            <div className=" ml-80 pl-80 font-serif text-xl text-black-600 ">
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
          </div> */}
        </form>
        {/* <form className="m-auto">
          {/* grid-container contacto-container }
        <div className=" ml-80 pl-80 font-serif text-xl text-black-600 ">
=======
              </div>
            </div>
          </figure>
          </form> */}
      {/* <blockquote>
                  <p class="text-lg font-medium">
                    “Tailwind CSS is the only framework that I've seen scale
                    on large teams. Its easy to customize, adapts to any design,
                    and the build size is tiny.”
                  </p>
                </blockquote>
                <figcaption class="font-medium">
                  <div class="text-sky-500 dark:text-sky-400">
                    Sarah Dayan
                  </div>
                  <div class="text-slate-700 dark:text-slate-500">
                    Staff Engineer, Algolia
                  </div>
                </figcaption> */}

      {/* <div className=" ml-80 pl-80 font-serif text-xl text-black-600">
>>>>>>> 3872756280a98d8c57470f1c6ac4f8da57d4bdbd
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
<<<<<<< HEAD
            </p>
          </div>
        </form> */}
      </div>
    </Layout>
=======
            </p>*/}
    </Layout >
>>>>>>> 3872756280a98d8c57470f1c6ac4f8da57d4bdbd
  );
};

export default Registro;
