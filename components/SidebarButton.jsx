import Link from "next/link";

const SidebarButton = ({ nombre, icono, href}) => {
  return (
    <Link href={href || "/dashboard"}>
      <a className="hover:bg-blue-400 w-full flex items-center px-5 h-8">
        <span className="text-white mr-2 material-icons">{icono}</span>
        <span className="text-white font-serif  flex items-center">
          {nombre}
        </span>
      </a>
    </Link>
  );
};
export default SidebarButton;
