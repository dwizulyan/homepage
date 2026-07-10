import type { FC } from "react";
import Day from "./day";
import Clock from "./clock";

const Navbar: FC = () => {
  return (
    <nav className="p-5 fixed flex justify-between top-0 left-0 w-full">
      <div></div>
      <div className="flex flex-col gap-1 items-end">
        <Day />
        <Clock />
      </div>
    </nav>
  );
};

export default Navbar;
