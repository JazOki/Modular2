const consultarEtapas = () => {
    return (
        <div className="h-screen w-screen flex">
            <div className="w-36 h-screen bg-gray-100">
            </div>
            <div className="w-full flex flex-col bg-gray-800">
                <div className="h-16 bg-gray-100 text-right "></div>
                <p className="font-serif pt-8 pl-12 text-xl text-white">Estado:
                    <input type="text" className=" left pl-20 pt-4 w-62 h-9"></input>
                    <a className="font-serif pt-8 pl-12 text-xl text-white">Modulo:
                        <input type="text" className=" left pl-20 pt-4 w-62 h-9"></input></a></p>
                <p className="font-serif pt-8 pl-12 text-xl text-white">Fecha de Registro:
                    <input type="text" className=" left pl-20 pt-4 w-62 h-9"></input></p>
                <p className="font-serif pt-8 pl-12 text-xl text-white">Nombre del Documento:
                    <input type="text" className=" left pl-20 pt-4 w-62 h-9"></input>
                    <a className="font-serif pt-8 pl-24 text-xl text-white">Archivo PDF Registrado:</a>
                    <input type="text" className=" left pl-20 pt-4 w-62 h-9"></input></p>

            </div>
        </div>

    );
};


export default consultarEtapas