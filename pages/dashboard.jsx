import Layout from "../components/Layout";

const Menu = () => {
  return (
    <Layout nombre="Jazmin" matricula="A03440" codigo="Y1923553">
      <div className=" flex flex-col h-full font-serif text-left text-xl bg-gray-600">
        <form className="ml-10">
          <p className="font-serif text-xl pt-20 text-white">
            Escribe el nombre del proyecto:
            <input
              type="text"
              className="ml-2 w-80 text-black rounded-3xl"
            ></input>
          </p>
          <p className="font-serif text-xl pt-5 text-white">
            Elige el archivo PDF que deseas subir:
            <input type="text" className="ml-2 text-black rounded-3xl"></input>
            <button className="ml-2 font-serif rounded w-30 h-8 transition bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-150">
              <span className=" text-white material-icons">file_upload</span>
            </button>
          </p>
          <p
            id="integrantesBox"
            className="font-serif text-left text-xl pl-0 pt-5 text-white"
          >
            Número de integrantes:
            <select name="select" className="rounded bg-white ml-2 text-black">
              <option value="nothing">Selecciona... </option>
              <option value="integrantes">2</option>
              <option value="integarntes">3</option>
            </select>
          </p>
          <p id="integrantes2Box" className="font-serif text-left text-xl pl-0 pt-5 text-white"> Integrantes:
              <select
                name="select"
                className="font-serif ml-2 rounded bg-white text-black pl-4">
                <option value="nothing">Selecciona... </option>
              </select>
              <select
                name="select"
                className="font-serif ml-2 rounded bg-white text-black pl-4">
                <option value="nothing">Selecciona... </option>
              </select>
          </p>
          <p id="asesor2Box" className="font-serif text-left text-xl pt-5 text-white">Asesor:
            <select name="select" className="font-serif ml-2 rounded bg-white text-black w-40 pl-4 pr-5">
              <option value="nothing">Selecciona... </option>
            </select>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Menu;
