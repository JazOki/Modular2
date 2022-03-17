const registroEtapa1 = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="w-36 h-screen bg-gray-100">
      </div>
      <div className="w-full flex flex-col bg-gray-800">
        <div className="h-16 bg-gray-100 text-right "></div>
        <div className="font-serif w-1/3 h-screen text-left text-xl pl-14 pt-7 bg-gray-600 text-white">Escribre el nombre del proyecto:
          <input type="text" className=" left pl-20 pt-4 w-62 h-9"></input>
          <div className="font-serif  text-left text-xl pl-0 pt-5  text-white">Elige el archivo PDF que deseas subir:
            <input type="text" className=" left pl-15 pt-4 w-30 h-9"></input> <button className="font-serif rounded w-30 h-12 transition bg-black hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-150">
              Subir Archivo
            </button></div>
          <div id="integrantesBox" className="font-serif text-left text-xl pl-0 pt-5 text-white">Número de integrantes de equipo:
            <select name="select" className="font-serif rounded bg-white text-black w-80">
              <option value="nothing">Selecciona... </option>
              <option value="integrantes">2</option>
              <option value="integarntes">3</option>
            </select>
          </div>
          <div id="integrantes2Box" className="font-serif text-left text-xl pl-0 pt-5 text-white">Selecciona los integrantes de tu equipo:
            <select name="select" className="font-serif rounded bg-white text-black w-40">
              <option value="nothing">Selecciona... </option>
            </select>
            <select name="select" className="font-serif rounded bg-white text-black w-40 pl-4">
              <option value="nothing">Selecciona... </option>
            </select>
          </div>
          <div id="asesor2Box" className="font-serif text-left text-xl pl-0 pt-5 text-white">Asesor:
            <select name="select" className="font-serif rounded bg-white text-black w-40 pr-5">
              <option value="nothing">Selecciona... </option>
            </select>
          </div>
          <div id="modulo2Box" className="font-serif text-left text-xl pl-0 pt-5 text-white">Modulo:
            <select name="select" className="font-serif rounded bg-white text-black w-40 pr-5">
              <option value="nothing">Selecciona... </option>
              <option value="etapa1"> Modulo 1 </option>
              <option value="etapa2"> Modulo 2 </option>
              <option value="etapa3"> Modulo 3 </option>
            </select>
          </div>
          <div><button className="font-serif rounded w-32 h-12 transition bg-black hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-150">
            Regresar
          </button></div>
          <div><button className="font-serif rounded left w-32 h-12  transition bg-black hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-150">
            Registrar
          </button></div>
        </div>
      </div>
    </div>

  );
};


export default registroEtapa1