import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="bg-secondary w-screen h-screen max-w-7xl mx-auto overflow-hidden">
      <Navbar />
      <div className="mt-32 w-2/3 mx-auto flex flex-col" style={{height: 'calc(100vh - 136px)'}}>{props.children}</div>
    </div>
  );
};

export default Layout;
