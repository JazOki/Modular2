import Layout from "../components/Layout";
import { privatePage } from "../lib/ironSessionConfig";

const Menu = () => {
  return < Layout user="Andy02" estado="Activo" codigo="Y19876557">
    
  </Layout>
};

// 
// // rutas protegidas
// export const getServerSideProps = privatePage((context) => {
//   const user = context.req.session.user; //si no hay un usuario
//   if (!user) {
//         return {
//           redirect: {
//             destination: "/api/logout",
//             permanent: false,
//           },
//         };
//   }
//   return {
//     props: {},
//   };
// });

export default Menu;