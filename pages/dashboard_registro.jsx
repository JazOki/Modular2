import Layout from "../components/Layout";

const Menu = () => {
  return (
    <Layout nombre="Jazmin" matricula="A03440" codigo="Y1923553">
      <div className=" flex flex-col h-full font-serif text-left text-xl bg-gray-600">
        <form className="ml-40">
          <p className="font-serif text-xl pt-20 text-white">
            Escribe el nombre del proyecto:
            <input
              type="text"
              className="ml-2 w-80 text-black rounded-full"
            ></input>
          </p>
          <p className="font-serif text-xl pt-7 text-white">
            Elige el archivo PDF que deseas subir:
            <input type="file" className="ml-2 text-black rounded-full"></input>
          </p>
          <p
            id="integrantesBox"
            className="font-serif text-left text-xl pl-0 pt-7 text-white"
          >
            Número de integrantes:
            <select name="select" className="rounded-full bg-white ml-2 text-black">
              <option value="nothing">Selecciona... </option>
              <option value="integrantes">2</option>
              <option value="integarntes">3</option>
            </select>
          </p>
          <p
            id="integrantes2Box"
            className="font-serif text-left text-xl pl-0 pt-7 text-white"
          >
            {" "}
            Integrantes:
            <select
              name="select"
              className="font-serif ml-2 rounded-full bg-white text-black pl-5"
            >
              <option value="nothing">Selecciona... </option>
            </select>
            <select
              name="select"
              className="font-serif ml-2 rounded-full bg-white text-black pl-5"
            >
              <option value="nothing">Selecciona... </option>
            </select>
          </p>
          <p
            id="asesor2Box"
            className="font-serif text-left text-xl pt-7 text-white"
          >
            Asesor:
            <select
              name="select"
              className="font-serif ml-2 rounded-full bg-white text-black w-40 pr-5"
            >
              <option value="nothing">Selecciona... </option>
            </select>
            <a
              id="modulo2Box"
              className="font-serif ml-7 text-left text-xl pl-0 pt-5 text-white"
            >
              Modulo:
              <select
                name="select"
                className="font-serif ml-2 text-center rounded-full bg-white text-black w-40 pr-5"
              >
                <option value="nothing">Selecciona... </option>
                <option value="etapa1"> Modulo 1 </option>
                <option value="etapa2"> Modulo 2 </option>
                <option value="etapa3"> Modulo 3 </option>
              </select>
            </a>
          </p>
          <p className="pt-20 ml-96">
            <button className="font-serif rounded left ml-10 w-32 h-12  transition bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-150">
              Registrar
            </button>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Menu;
