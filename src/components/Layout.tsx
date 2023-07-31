import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Layout = (props: PropsWithChildren) => {
  return (
    <div
      className="bg-secondary w-screen h-screen md:max-w-7xl mx-auto flex"
      style={{ height: "100svh" }}
    >
      <Navbar />
      <div className="mx-auto flex flex-col mt-16 px-4 pb-4 grow md:px-0 md:mt-32 md:w-2/3">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
