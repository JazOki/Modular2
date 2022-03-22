const modificacionEtapas = () => {
    return (
        <div className="h-screen w-screen flex">
            <div className="w-36 h-screen bg-gray-100">
            </div>
            <div className="w-full flex flex-col bg-gray-800">
                <div className="h-16 bg-gray-100 text-right "></div>
                <div className="font-serif w-2/6 h-80 text-left text-xl pl-14 pt-7 bg-gray-600 text-white">Escribre el nombre del proyecto:
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
                </div>
            </div>
        </div>
    );
};


export default modificacionEtapas