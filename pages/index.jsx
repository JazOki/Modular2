import Link from "next/link";

const LogIn = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-grow">
        <aside className="w-1/2 flex flex-col justify-evenly bg-gray-800">
          <div className="flex flex-col items-center">
            <p className="font-serif text-center text-4xl pt-10 text-white">
              {" "}
              ¡Bienvenido!{" "}
            </p>
            <span className="text-white flex justify-center material-icons text-9xl">
              account_circle
            </span>
            <p className="font-serif mr-60 text-right text-xl pl-0 pt-5 text-white">
              {" "}
              Correo institucional:{"   "}
            </p>
            <a className="pt-2">
              <input type="text" className="w-48 mr-60 rounded-3xl"></input>
              <p className="pt-11 font-sans text-white absolute px-48 top-64">
                {" "}
                @universidad-une.com{" "}
              </p>
            </a>
            <p className="font-serif mr-80 text-right text-xl pl-0 pt-5 text-white">
              {""}
              Contraseña:{""}
            </p>
            <p className="mr-20">
              <input type="password" className="w-80 rounded-3xl"></input>{" "}
              <span className="material-icons-outlined text-white text-3xl">
                visibility
              </span>
            </p>
            <p className="font-serif mr-80 text-xl pt-5 text-white">
              {" "}
              Usuario:{"   "}
            </p>
            <p id="usuarioBox" className="pl-24 pt-2 font-serif">
              <select name="select" className="rounded-3xl bg-white w-80">
                <option value="nothing"> Selecciona una opción... </option>
                <option value="alumno"> Alumno </option>
                <option value="docente"> Docente </option>
                <option value="Admin"> Admin </option>
              </select>
            </p>
          </div>
          <div>
            <p className="text-blue-500 justify-center border-b border-blue-500 flex items-center">
              Documentación
            </p>
          </div>
          <div>
            <p className="text-blue-500 justify-center border-b border-blue-500 flex items-center">
              Configuraciones
            </p>
          </div>
        </aside>
        <div className="flex-grow ">Hola</div>
      </div>
    </div>
    /*<div id="contenedorPrincipal" className="h-screen w-screen flex">
      <div id="contenedorIzquierdo" className="w-2/3 h-screen bg-gray-800">
        <div className="font-serif text-center text-4xl pt-10 text-white">
          {" "}
          ¡Bienvenido!{" "}
        </div>
        <span
          id="iconoLogIn"
          className="material-icons-outlined text-white pt-5 flex justify-center text-9xl"
        >
          account_circle
        </span>
        <p className="font-serif text-left text-xl pl-24 pt-5 text-white">
          {" "}
          Correo institucional:{" "}
        </p>
        <div className="pl-24 pt-2">
          <input type="text" className="w-48 rounded"></input>
          <p className="pt-7 font-sans text-white absolute left-72 top-64">
            {" "}
            @universidad-une.com{" "}
          </p>
        </div>

        <p className="font-serif text-left text-xl pl-24 pt-5 text-white top-56">
          {" "}
          Contraseña:{" "}
        </p>
        <div className="pl-24 pt-2">
          <input type="password" className="w-80 rounded"></input>{" "}
        </div>
        <span className="material-icons-outlined text-white text-3xl ">
          visibility
        </span>
        <p className="font-serif text-left text-xl text-white pl-24 pt-5">
          {" "}
          Usuario:{" "}
        </p>
        <div id="usuarioBox" className="pl-24 pt-2 font-serif">
          <select name="select" className="rounded bg-white w-80">
            <option value="nothing"> Selecciona una opción... </option>
            <option value="alumno"> Alumno </option>
            <option value="docente"> Docente </option>
            <option value="Admin"> Admin </option>
          </select>
        </div>

        <div className="pt-7 pl-48">
          <Link href="/dashboard">
            <a>
              <button className="font-serif rounded w-36 h-14 transition //duration-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-150">
                Ingresar
              </button>
            </a>
          </Link>
        </div>
      </div>
      <div id="contenedorDerecho" className="w-full flex flex-col">
        <div className="text-center pt-56">
          <span className="material-icons-outlined text-9xl">book</span>
          <p className="font-serif text-xl">
            {" "}
            Gestor de proyectos <br /> modulares{" "}
          </p>
        </div>
      </div>
    </div>*/
  );
};

export default LogIn;
