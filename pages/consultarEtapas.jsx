const consultarEtapas = () => {
    return (
        <div className="h-screen w-screen flex">
            <div className="w-36 h-screen bg-gray-100">
            </div>
            <div className="w-full flex flex-col bg-gray-800">
                <div className="h-16 bg-gray-100 text-right "></div>
                <div className="font-serif w-3/5 h-96  pl-14 pt-7 bg-gray-600">
                    <p className="font-serif bg-gray-600 text-white">Estado:
                        <input type="text" className=" left pl-15 pt-4 w-48 h-9"></input>
                        <a className="font-serif bg-gray-600 pl-24 text-white">Modulo:</a>
                        <input type="text" className=" left pl-15 pt-4 w-48 h-9"></input></p>
                    <p className="font-serif bg-gray-600 pt-12 text-white">Fecha de Registro:
                        <input type="text" className=" left pl-15 pt-4 w-48 h-9"></input></p>
                    <p className="font-serif bg-gray-600 pt-12 text-white">Nombre del Documento: </p>
                    <input type="text" className=" left pl-15 pt-4 w-48 h-9"></input>
                    <p className="font-serif bg-gray-600 pt-12 text-white">Archivo PDF registrado:</p>
                    <input type="text" className=" left pl-15 pt-4 w-48 h-9"></input>
                </div>
            </div>
        </div>
    );
};


export default consultarEtapas