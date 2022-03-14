const Layout = ({children, nombre}) => {
    return (
      <div className="h-screen w-screen flex">
        <div className="w-36 h-screen bg-gray-100">
          <a className="hover:bg-blue-400 w-full flex items-center justify-center">
            <span className="material-icons">schedule</span>
            <span className="flex items-center">recents</span>
          </a>
        </div>
        <div className="w-full flex flex-col">
          <div className="h-16 bg-gray-100 text-right ">{nombre}</div>
          <div className="h-full p-5">
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default Layout;