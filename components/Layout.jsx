const Layout = ({children, nombre, matricula, codigo}) => {
    return (
      <div className="w-full flex flex-col">
        {
          //parte de izquiero
      }
      <div className="bg-blue-900 text-right h-14 w-full flex items-center justify-center">
      <span className="text-white material-icons">account_circle </span>
      <span className="text-white font-serif  flex items-center"> {nombre}</span>
      <p className="text-white h-11 font-serif flex text-center items-start justify-start">Alumno</p>
      </div>
      <div className="h-full p-5">{children}</div>
      {
          //parte de izquierdo
      }
      <div className="h-screen w-screen">
        <div className="w-60 h-screen bg-gray-800">
        <span className="text-white flex justify-center material-icons text-9xl">account_circle</span>
        {
          //manda llamar la variable matricula
        }
        <p className="text-white h-11 font-serif flex text-center items-center">Matrícula: {matricula}</p>
        <p className="text-white h-11 font-serif flex items-center">Código: {codigo}</p>
        <p className="text-blue-500 justify-center border-b border-blue-500 flex items-center">Documentación</p>
          <button className="hover:bg-blue-400 h-14 w-full flex items-center justify-center">
            <span className="text-white material-icons">description</span>
            <span className="text-white font-serif  flex items-center">Registrar</span>
          </button>
          <button className="hover:bg-blue-400  h-14 w-full flex items-center justify-center">
            <span className="text-white material-icons">note_alt</span>
            <span className="text-white font-serif flex items-center">Modificaciones</span>
          </button>
          <button className="hover:bg-blue-400 h-14 w-full flex items-center justify-center">
            <span className="text-white material-icons">source</span>
            <span className="text-white font-serif flex items-center">Consulta</span>
          </button>
          <button className="hover:bg-blue-400 h-14 w-full flex items-center justify-center">
            <span className="text-white material-icons">find_in_page</span>
            <span className="text-white font-serif flex items-center">Observaciones</span>
          </button>
          <p className="text-blue-500 justify-center border-b border-blue-500 flex items-center">Configuraciones</p>
          <button className="hover:bg-blue-400 h-12 w-full flex items-center justify-center">
            <span className="text-white material-icons">person</span>
            <span className="text-white font-serif flex items-center">Perfil</span>
          </button>
          <button className="hover:bg-blue-400 h-12 w-full flex items-center justify-center">
            <span className="text-white material-icons">exit_to_app</span>
            <span className="text-white font-serif flex items-center">Salir</span>
          </button>
        </div>
        </div>
    </div>
     /* 
      <div className="h-screen w-screen flex">
        <div className="w-60 h-screen bg-gray-800">
        <span className="text-white flex justify-center material-icons text-9xl">account_circle</span>
        {
          //manda llamar la variable matricula
        }
        <p className="text-white h-11 font-serif flex text-center items-center">Matrícula: {matricula}</p>
        <p className="text-white h-11 font-serif flex items-center">Código: {codigo}</p>
        <p className="text-blue-500 justify-center border-b border-blue-500 flex items-center">Documentación</p>
          <button className="hover:bg-blue-400 h-14 w-full flex items-center justify-center">
            <span className="text-white material-icons">description</span>
            <span className="text-white font-serif  flex items-center">Registrar</span>
          </button>
          <button className="hover:bg-blue-400  h-14 w-full flex items-center justify-center">
            <span className="text-white material-icons">note_alt</span>
            <span className="text-white font-serif flex items-center">Modificaciones</span>
          </button>
          <button className="hover:bg-blue-400 h-14 w-full flex items-center justify-center">
            <span className="text-white material-icons">source</span>
            <span className="text-white font-serif flex items-center">Consulta</span>
          </button>
          <button className="hover:bg-blue-400 h-14 w-full flex items-center justify-center">
            <span className="text-white material-icons">find_in_page</span>
            <span className="text-white font-serif flex items-center">Observaciones</span>
          </button>
          <p className="text-blue-500 justify-center border-b border-blue-500 flex items-center">Configuraciones</p>
          <button className="hover:bg-blue-400 h-12 w-full flex items-center justify-center">
            <span className="text-white material-icons">person</span>
            <span className="text-white font-serif flex items-center">Perfil</span>
          </button>
          <button className="hover:bg-blue-400 h-12 w-full flex items-center justify-center">
            <span className="text-white material-icons">exit_to_app</span>
            <span className="text-white font-serif flex items-center">Salir</span>
          </button>
        {//Div de la parte de arriba
        }
        </div>
        <div className="w-full flex flex-col">
          <div className="h-16 bg-gray-800 text-right ">{nombre}</div>
          <div className="h-full p-5">
            {children}
          </div>
        </div>
      </div>
      */
    );
  };
  
  export default Layout;