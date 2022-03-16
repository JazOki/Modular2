const LogIn = () => {
    return (
        <div id="contenedorPrincipal" className="h-screen w-screen flex">
            <div id="contenedorIzquierdo" className="w-2/3 h-screen bg-gray-800">
                <div className="font-serif text-center text-4xl pt-10 text-white">  ¡Bienvenido! </div>
                <span id="iconoLogIn" class="material-icons-outlined text-white pt-5 flex justify-center text-9xl">
                    account_circle
                </span>
                <p className="font-serif text-left text-xl pl-24 pt-5 text-white"> Correo institucional: </p>
                <div className="pl-24 pt-2"><input type="text" className="w-48 rounded"></input>
                    <p className="pt-7 font-sans text-white absolute left-72 top-64"> @universidad-une.com </p>
                </div>
                <p className="font-serif text-left text-xl pl-24 pt-5 text-white top-56"> Contraseña: </p>
                <div className="pl-24 pt-2"><input type="password" className="w-80 rounded"></input> </div>
                <span class="material-icons-outlined text-white text-3xl">
                    visibility
                </span>
                <p className="font-serif text-left text-xl text-white pl-24 pt-5"> Usuario: </p>
                <div id="usuarioBox" className="pl-24 pt-2">
                    <select name="select" className="rounded bg-white w-80">
                        <option value="nothing"> Selecciona una opción... </option>
                        <option value="alumno"> Alumno </option>
                        <option value="docente"> Docente </option>
                        <option value="Admin"> Admin </option>
                    </select>
                </div>

                <div className="pt-7 pl-48">
                    <button className="font-serif rounded w-36 h-14 transition duration-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-150">
                        Ingresar
                    </button>
                </div>
            </div>
            <div id="contenedorDerecho" className="w-full flex flex-col">
                <div className="text-center pt-56">
                    <span class="material-icons-outlined text-9xl">
                        book
                    </span>
                    <p className="font-serif text-xl"> Gestor de proyectos <br /> modulares </p>
                </div>
            </div>
        </div>
    )
}

export default LogIn