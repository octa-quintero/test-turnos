import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/button';
import Style from "./navbar.module.css";
import logo from "../../../src/assets/Logo.png";

const NavBar = () => {
  return (
    <div className={Style.container}>
      <NavLink to="/" className={Style.logoLink}>
        <img src={logo} alt="Logo" className={Style.logo} />
      </NavLink>
      <div className={Style.Subcontainer}>
        <Button 
          to="/service-selection" 
          text="Servicios" 
        />
        <Button 
          to="/turnos" 
          text="Turnos" 
        />
      </div>
    </div>
  );
};

export default NavBar;
