const consultarEtapas = () => {
    return (
        <div className="h-screen w-screen flex">
            <div className="w-36 h-screen bg-gray-100">
            </div>
            <div className="w-full flex flex-col bg-gray-800">
                <div className="h-16 bg-gray-100 text-right "></div>
                <div className="font-serif w-3/5 h-96  pl-14 pt-7 bg-gray-600">
                    <p className="font-serif w-50 h-50 bg-gray-600 text-white">Estado:
                        <input type="text" className="telf pl-16 pt-4 w-40 h-9"></input></p>
                    <p className="font-serif w-60 h- left bg-gray-600 text-white">Modulo:</p>

                </div>
            </div>
        </div>
    );
};


export default consultarEtapas