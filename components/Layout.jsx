import SidebarButton from "./SidebarButton";
import Link from "next/link";
import Script from "next/script";
import { privatePage } from "../lib/ironSessionConfig";

const Layout = ({ children, nombre, matricula, codigo }) => {
  return (
    <>
      <Script id="load-watson" dangerouslySetInnerHTML={{
        __html: `
        function preSendhandler(event) {
          event.data.context.skills['main skill'].user_defined.ismember = true;    
          event.data.context.skills['main skill'].user_defined.username = '${nombre}';    
        }
            window.watsonAssistantChatOptions = {
            integrationID: "264e511b-6a10-47e0-a10c-aa9bd1e3b62b", // The ID of this integration.
            region: "us-south", // The region your integration is hosted in.
            serviceInstanceID: "aa8f2b91-1225-419a-b9e5-af1043c982d5", // The ID of your service instance.
            onLoad: function (instance) { 
              instance.on({ type: "pre:send", handler: preSendhandler });
              instance.render(); }
          };`,
      }}
      />
      <Script src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js" />
      <Script src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js" />
      <div className="flex flex-col w-screen h-screen">
        <header className="px-5 bg-blue-900 text-right h-12 flex items-center justify-between">
          <p className="ml-5 text-white font-serif flex text-center items-start px-14">
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
          <aside className="w-64 flex flex-col justify-evenly bg-gray-800">
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
            <div>
              <p className="text-blue-500 justify-center border-b border-blue-500 flex items-center">
                Documentación
              </p>
              <SidebarButton href="/dashboard_registro" nombre="Registrar" icono="description" />
              <SidebarButton href="/dashboard_modificaciones" nombre="Modificaciones" icono="note_alt" />
              <SidebarButton nombre="Consulta" icono="source" />
              <SidebarButton nombre="Observaciones" icono="find_in_page" />
            </div>
            <div>
              <p className="text-blue-500 justify-center border-b border-blue-500 flex items-center">
                Configuraciones
              </p>
              <SidebarButton nombre="Perfil" icono="person" />
              <SidebarButton nombre="Salir" icono="exit_to_app" />
            </div>
          </aside>
          <div className="flex-grow ">{children}</div>
        </div>
      </div>
    </>
  );
};

// rutas protegidas
export const getServerSideProps = privatePage((context) => {
  const user = context.req.session.user; //si hay un usuario
  if (!user) {
    return {
      redirect: {
        destination: "/api/logout",
        permanent: false,
      },
    };

  }
  return {
    props: {},
  };
});

export default Layout;
