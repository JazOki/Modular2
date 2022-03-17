import SidebarButtonD from "./SidebarButtonD";
import Link from "next/link";

const LayoutD = ({ children, nombre, codigo }) => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <header className="px-5 bg-purple-800 text-right h-12 flex items-center justify-between">
        <p className="ml-5 text-white font-serif flex text-center items-center px-14">
          Docente
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
        <aside className="w-64 flex flex-col justify-evenly bg-gray-800">
          <div className="flex flex-col items-center">
            <span className="text-white flex justify-center material-icons text-9xl">
              account_circle
            </span>
            <p className="text-white font-serif flex items-center">
              Código: {codigo}
            </p>
          </div>
          <div>
            <p className="text-purple-500 justify-center border-b border-purple-500 flex items-center">
              Documentación
            </p>
            <SidebarButtonD nombre="Consulta" icono="find_in_page" />
          </div>
          <div>
            <p className="text-purple-500 justify-center border-b border-purple-500 flex items-center">
              Configuraciones
            </p>
            <SidebarButtonD nombre="Perfil" icono="person" />
            <SidebarButtonD nombre="Salir" icono="exit_to_app" />
          </div>
        </aside>
        <div className="flex-grow ">{children}</div>
      </div>
    </div>
  );
};

export default LayoutD;
