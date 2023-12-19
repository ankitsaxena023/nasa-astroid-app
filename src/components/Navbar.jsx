import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-black text-white">
      <div>
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/5626523/asteroid-clipart.svg"
          className="w-12 hover:animate-pulse cursor-pointer"
        />
      </div>
      <div>
        <img
          src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg"
          alt="nasa logo"
          className="w-14 ml-20"
        />
      </div>
      <div>
        <ul className="flex">
          <li className="ml-5 active active:text-orange-700">
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
