const LogIn = () => {
    return (
        <div id="contenedorPrincipal" className="h-screen w-screen flex">
            <div id="contenedorIzquierdo" className="w-2/3 h-screen bg-gray-800">
                <div className="font-serif text-center text-4xl pt-7 text-white">  ¡Bienvenido! </div>
                <span class="material-icons-outlined text-white items-center">
                    account_circle
                </span>
                <div className="font-serif text-left text-xl pl-10 text-white "> Correo institucional: </div>
                <div className="pl-10 w-16"> <input type="text"></input> </div>
            </div>
            <div id="contenedorDerecho" className="w-full flex flex-col"></div>
        </div>
    )
}

export default LogIn