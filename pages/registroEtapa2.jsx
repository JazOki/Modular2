const registroEtapa2 = () => {
    return (
      <div className="h-screen w-screen flex">
        <div className="w-36 h-screen bg-gray-100">
        </div>
        <div className="w-full flex flex-col bg-gray-800">
          <div className="h-16 bg-gray-100 text-right "></div>
          <div className="font-serif text-left text-xl text-left pl-10 text-white ">Titulo<input type="text"></input></div>
          <div id="moduloBox" className="font-serif text-xl text-left pl-10 text-white pl-24 pt-2">Modulo
                    <select name="select" className="font-serif w-48 rounded bg-white text-black w-80">
                        <option value="nothing"> Selecciona un modulo... </option>
                        <option value="etapa1"> Modulo 1 </option>
                        <option value="etapa2"> Modulo 2 </option>
                        <option value="etapa3"> Modulo 3 </option>
                    </select>
                </div>
          <div className="font-serif text-left text-xl pl-10 text-white">Descripcion <input type="text-medium"></input></div>
          <div className="font-serif rounded text-left text-xl pl-10 text-white">Objetivo General <input type="text"></input></div>
          <div className="font-serif rounded text-left text-xl pl-10 text-white">Alcance <input type="text"></input></div>
          <div className="font-serif rounded text-left text-xl pl-10 text-white">Herramientas <input type="text"></input></div>
          <div id="moduloBox" className="font-serif text-xl text-left pl-10 text-white pl-24 pt-2">Asesor
                    <select name="select" className="font-serif w-48 rounded bg-white text-black w-80">
                        <option value="nothing"> Selecciona un Asesor... </option>
                        <option value="etapa1"> Juan Antonio Carbajal Martinez </option>
                        <option value="etapa2"> Carlos Ivan Medina Lopez </option>
                    </select>
                </div>
          </div>
        </div>
    );
  };
  

export default registroEtapa2