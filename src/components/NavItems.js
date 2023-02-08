import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const NavItems = ({ navLinks }) => {
  const { pathname } = useLocation();
  return (
    <>
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link
            to={link.to}
            className={`${
              pathname === link.to && "bg-white text-violet-700"
            } block py-2 pl-3 pr-4 mt-1 sm:mt-0 text-white rounded-full hover:bg-white hover:text-violet-700`}
            onClick={link.onCloseNav}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavItems;
