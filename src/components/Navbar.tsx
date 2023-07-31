import { useLocation } from "react-router-dom";
import { MdWork, MdHomeFilled } from "react-icons/md";
import { BiCodeAlt, BiSolidServer, BiHash } from "react-icons/bi";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 w-full left-0 bg-secondary">
      <div className="bg-primary text-center mx-auto flex justify-center w-full p-2 md:p-6 md:w-2/3 md:my-6 gap-4">
        <a href="/" className="flex items-center">
          <MdHomeFilled size={30} />
          {pathname === "/" && <div className="font-bold">Home</div>}
        </a>
        <a href="/career" className="flex items-center">
          <MdWork size={30} />
          {pathname === "/career" && <div className="font-bold">Career</div>}
        </a>
        <a href="/projects" className="flex items-center">
          <BiCodeAlt size={30} />
          {pathname === "/projects" && (
            <div className="font-bold">Projects</div>
          )}
        </a>
        <a href="/homeserver" className="flex items-center">
          <BiSolidServer size={30} />
          {pathname === "/homeserver" && (
            <div className="font-bold">Homeserver</div>
          )}
        </a>
        <a href="/devlogs" className="flex items-center">
          <BiHash size={30} />
          {pathname === "/devlogs" && <div className="font-bold">DevLogs</div>}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
