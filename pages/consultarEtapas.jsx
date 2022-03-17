const consultarEtapas = () => {
    return (
        <div className="h-screen w-screen flex">
            <div className="w-36 h-screen bg-gray-100">
            </div>
            <div className="w-full flex flex-col bg-gray-800">
                <div className="h-16 bg-gray-100 text-right "></div>
                <div className="font-serif w-2/6 h-80 text-left text-xl pl-14 pt-7 bg-gray-600 text-white">Escribre el nombre del proyecto:
                    <div><button className="font-serif rounded w-32 h-12 transition bg-gray-600 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-150">
                        Regresar
                    </button></div>
                </div>
            </div>
        </div>
    );
};


export default consultarEtapas