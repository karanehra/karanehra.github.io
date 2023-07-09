import { useLocation, useNavigate } from "react-router-dom";

const links = [
  { url: "/", name: "Home" },
  { url: "/career", name: "Career" },
  { url: "/projects", name: "Projects" },
];

const Navbar = () => {
  const navigate = useNavigate();
  // const {pathname} = useLocation()

  return (
    <nav className="fixed top-0 w-full left-0">
      <div className="bg-primary p-6 text-center mx-auto w-2/3 m-6 flex justify-center">
        {links.map((link, idx) => (
          <div
            className="text-secondary font-sans tracking-wide uppercase font-bold hover:bg-secondary hover:text-primary py-2 px-4 cursor-pointer"
            key={idx}
            onClick={() => navigate(link.url)}
          >
            {link.name}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
