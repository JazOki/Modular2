const SidebarButtonD = ({nombre , icono}) => {
    return (
      <button className="hover:bg-purple-400 w-full flex items-center px-5 h-8">
        <span className="text-white mr-2 material-icons">{icono}</span>
        <span className="text-white font-serif  flex items-center">
          {nombre}
        </span>
      </button>
    );
  };
  export default SidebarButtonD