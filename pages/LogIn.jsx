const LogIn = () => {
    return (
        <div id="contenedorPrincipal" className="h-screen w-screen flex">
            <div id="contenedorIzquierdo" className="w-2/3 h-screen bg-gray-800">
                <div className="font-serif text-center text-4xl pt-10 text-white">  ¡Bienvenido! </div>
                <span class=" text-2xl justify-center material-icons-outlined text-white">
                    account_circle
                </span>
                <p className="font-serif text-left text-xl pl-24 text-white"> Correo institucional: </p>
                <div className="pl-24 pt-2"><input type="text" className="w-48 rounded"></input> </div>
                <p className="pt-4 font-sans text-white absolute left-72 top-32"> @universidad-une.com </p>
                <p className="font-serif text-left text-xl pl-24 pt-5 text-white top-56"> Contraseña: </p>
                <div className="pl-24 pt-2"><input type="password" className="w-80 rounded"></input> </div>
                <span class="material-icons-outlined text-white">
                    visibility
                </span>
                <p className="font-serif text-left text-xl text-white pl-24 pt-5"> Usuario: </p>
                <div id="usuarioBox" className="pl-24 pt-2">
                    <select name="select" className="w-48 rounded bg-white w-80">
                        <option value="nothing"> Selecciona una opción... </option>
                        <option value="alumno"> Alumno </option>
                        <option value="docente"> Docente </option>
                        <option value="Admin"> Admin </option>
                    </select>
                </div>

                <div className="pt-14 pl-48">
                    <button className="font-serif text-lg rounded bg-white w-36 h-14 hover:bg-gray-300 ">
                        Ingresar
                    </button>
                </div>
            </div>
            <div id="contenedorDerecho" className="w-full flex flex-col"></div>
        </div>
    )
}

export default LogIn