import type { FC } from "react";
import Day from "./day";
import Clock from "./clock";

const Navbar: FC = () => {
  return (
    <nav className="p-5 fixed flex justify-between top-0 left-0 w-full">
      <div></div>
      <div className="flex gap-3 items-center">
        <Day />
        <span className="font-black text-foreground">//</span>
        <Clock />
      </div>
    </nav>
  );
};

export default Navbar;
