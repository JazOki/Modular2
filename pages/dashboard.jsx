import Layout from "../components/Layout";
import { privatePage } from "../lib/ironSessionConfig";

const dashboard = ({nombre, isEnable, codigo, matricula}) => {
  return < Layout nombre={nombre} matricula={matricula} estado={isEnable?"activo":"inactivo"} codigo={codigo} >
    
  </Layout>
};

  // rutas protegidas
  export const getServerSideProps = privatePage((context) => {
    const user = context.req.session.user; //si no hay un usuario
    if (!user) {
          return {
            redirect: {
              destination: "/api/logout",
              permanent: false,
            },
          };
    }
    return {
      props: {
        ...user
      },
    };
  });

export default dashboard;