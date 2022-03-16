import SidebarButton from "./SidebarButton";

const Layout = ({ children, nombre, matricula, codigo }) => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <header className="px-5 bg-blue-900 text-right h-12 flex items-center justify-between">
        <p className="ml-5 text-white font-serif flex text-center items-start justify-start">
          Alumno
        </p>
        <p className="flex">
          <span className="text-white mr-2 material-icons">
            account_circle{" "}
          </span>
          <span className="text-white font-serif  flex items-center">
            {" "}
            {nombre}
          </span>
        </p>
      </header>

      <div className="flex flex-grow">
        <aside className="w-64 bg-gray-800">
          <div className="flex flex-col items-center">
            <span className="text-white flex justify-center material-icons text-9xl">
              account_circle
            </span>
            <p className="text-white font-serif flex items-center">
              Matrícula: {matricula}
            </p>
            <p className="text-white font-serif flex items-center">
              Código: {codigo}
            </p>
          </div>
          <p className="text-blue-500 justify-center border-b border-blue-500 flex items-center">
            Documentación
          </p>
          <SidebarButton nombre="Registrar" icono="description" />
          <SidebarButton nombre="Modificaciones" icono="note_alt" />
          <SidebarButton nombre="Consulta" icono="source" />
          <SidebarButton nombre="Observaciones" icono="find_in_page" />
          <p className="text-blue-500 justify-center border-b border-blue-500 flex items-center">
            Configuraciones
          </p>
          <SidebarButton nombre="Perfil" icono="person" />
          <SidebarButton nombre="Salir" icono="exit_to_app" />
        </aside>
        <div className="flex-grow ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
