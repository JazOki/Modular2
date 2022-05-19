import Layout from "../components/Layout";
import { privatePage } from "../lib/ironSessionConfig";

const Dashboard = ({ alumno, nombre, isEnable, codigo, matricula }) => {
  return < Layout alumno={alumno} nombre={nombre} matricula={matricula} estado={isEnable ? "activo" : "inactivo"} codigo={codigo} >

  </Layout>
};
// rutas protegidas
export const getServerSideProps = privatePage(async (context) => {
  const user = context.req.session.user; //si no hay un usuario
  if (!user) {
    return {
      redirect: {
        destination: "/api/logout",
        permanent: false,
      },
    };
  }

  try {
    var url = `http://localhost:3000/api/getproyectobyalumnoid?matricula=${user.matricula}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const {alumno} = await response.json()
  return {
    props: {
      ...user,
      alumno
    },
  };
} catch (error) {
    return {
      props: {
        ...user
      },
    };
  }
});

export default Dashboard;