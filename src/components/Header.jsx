import React from "react";
import {NavLink } from "react-router-dom";

function Header() {
  const navItems = [
    {
      name: "Home",
      toPage: "/",
    },

    {
      name: "About",
      toPage: "/about",
    },
    {
      name: "Contact",
      toPage: "/contact",
    },
  ];

  return (
    <div className="relative w-full bg-white shadow-md py-2">
      <div className="mx-10 flex  items-center justify-between px-2 py-2 ">
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold text-2xl">OneOath</span>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.toPage}
                  className="text-lg font-semibold text-gray-800 hover:text-gray-900 hover:border-b-2 border-green-600"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
