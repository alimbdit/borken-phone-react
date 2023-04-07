import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import {NavLink,} from "react-router-dom";
import './Header.css';


const Header = () => {
  return (
    <div className=" bg-blue-200">
      <nav className="flex justify-between items-center mx-16 py-5">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon className="text-4xl text-orange-500" icon={faAtom} />
          <h1 className="text-4xl font-extrabold">
            Broken <span className="text-rose-700">Phone</span>
          </h1>
        </div>
        <div className="menu">
          <NavLink to="/" className={({ isActive }) =>
                      isActive
                        ? "active"
                        :  "inactive"
                    }>Shop</NavLink>
          <NavLink to="/order" className={({ isActive }) =>
                      isActive
                        ? "active"
                        :  "inactive"
                    }>Order</NavLink>
          <NavLink to="/inventory" className={({ isActive }) =>
                      isActive
                        ? "active"
                        :  "inactive"
                    }>Inventory</NavLink>
          <NavLink to="/login" className={({ isActive }) =>
                      isActive
                        ? "active"
                        :  "inactive"
                    }>Login</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
