import Layout from "../components/Layout";

const Modificaciones = () => {
  return (
    <Layout nombre="Jazmin" matricula="A03440" codigo="Y1923553">
      <div className=" flex flex-col h-full font-serif text-left text-xl bg-gray-600">
        <form className="m-auto">
        <p className="ml-80 font-serif text-xl text-white">
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
          <p className="font-serif text-xl pt-20 text-white">
            Escribe el nombre del proyecto:
            <input
              type="text"
              className="ml-2 w-80 text-black rounded-full"
            ></input>
          </p>
          <p className="font-serif  text-left text-xl pl-0 pt-5  text-white">
            Elige el archivo PDF que deseas subir:
            <input
              type="file"
              className="ml-2 w-62 text-black rounded-full"
            ></input>{" "}
            
          </p>
          <p className="pt-7 ml-96">
            <button className="font-serif rounded left ml-10 w-32 h-12  transition bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-150">
              Modificar
            </button>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Modificaciones;

{
  /* <div className="font-serif w-2/6 h-80 text-left text-xl pl-14 pt-7 bg-gray-600 text-white">Escribre el nombre del proyecto:
                    <input type="text" className=" left pl-20 pt-4 w-62 h-9"></input>
                    <p className="font-serif  text-left text-xl pl-0 pt-5  text-white">Elige el archivo PDF que deseas subir:
                        <input type="text" className=" left pl-15 pt-4 w-30 h-9"></input> <button className="font-serif rounded w-30 h-12 text-2xl transition bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 duration-150">
                            <span className="material-icons-outlined text-4xl">
                                unarchive
                            </span>
                        </button></p>
                    <p><button className="font-serif rounded w-32 h-12 transition bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 duration-150">
                        Regresar
                    </button>
                        <button className="font-serif rounded  w-32 h-12  transition bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 duration-150">
                            Modificar
                        </button></p>
                </div> */
}
