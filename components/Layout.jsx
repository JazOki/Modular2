const Layout = ({children, nombre}) => {
    return (
      <div className="h-screen w-screen flex">
        <div className="w-36 h-screen bg-gray-100"></div>
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