import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => {
  return (
    <ul className={s.nav}>
      <li>
        <NavLink to="/" exact className={s.link} activeClassName={s.active}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/pets" className={s.link} activeClassName={s.active}>
          Pets
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={s.link} activeClassName={s.active}>
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
