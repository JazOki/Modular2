const registroEtapa2 = () => {
    return (
      <div className="h-screen w-screen flex">
        <div className="w-36 h-screen bg-gray-100">
        </div>
        <div className="w-full flex flex-col bg-gray-800">
          <div className="h-16 bg-gray-100 text-right "></div>
          <div className="font-serif text-left text-xl text-left pl-10 text-white ">Titulo<input type="text"></input></div>
          <div className="text-left text-xl text-right  pl-10 text-white">Modulo <input type="select"></input></div> 
          <div className="text-left text-xl pl-10 text-white">Descripcion <input type="text-medium"></input></div>
          <div className="text-left text-xl pl-10 text-white">Objetivo General <input type="text"></input></div>
           
          </div>
        </div>
    );
  };
  

export default registroEtapa2