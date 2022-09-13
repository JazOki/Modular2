import Layout from "../components/Layout";

const Modificaciones = () => {
  return (
    <Layout>
      {/* bg-gray-600 */}
      <div className=" flex flex-col h-full font-serif text-left text-xl bg-white">
        <form className="m-auto">
          <div className=" ml-80 pl-80 font-serif text-xl text-black-600">
            <p className="  ">
              Etapas:
              <select
                name="select"
                className="font-serif ml-2 text-center rounded-full bg-blue text-black-600 w-auto outline-double outline-3 outline-offset-2 ..."
              >
                <option value="etapa1">Etapa 1: Planteamiento del problema </option>
                <option value="etapa2">Etapa 2: Resumen del protyecto </option>
                <option value="etapa3">Etapa 3: Documentación final </option>
              </select>
            </p>
          </div>
          <div>
            <p className="font-serif text-xl pt-20 text-black-600 ">
              Escribe el nombre del proyecto:
              <input
                type="text"
                className="ml-2 w-80 text-black-600 rounded-full outline-double outline-3 outline-offset-2 ..."
              ></input>
            </p>
            <p className="font-serif  text-left text-xl pl-0 pt-5  text-black-600">
              Elige el archivo PDF que deseas subir:
              <input
                type="file"
                className="ml-2 w-62 text-black-600 rounded-full outline-double outline-3 outline-offset-2 ..."
              ></input>{" "}

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

export default Modificaciones;