import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
.navbar-list{
  display:flex;
  gap:4.8rem;
  }
  .navbar-list li{
  list-style:none;
  }
  .navbar-link{
    text-decoration:none;
  }
        .navbar-link:link,
  .navbar-link:visited{
              display: inline-block;
          text-decoration: none;
          font-size: 18px;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
  }
  .navbar-link:hover,
  .navbar-link:active
  {
    color:${({theme}) => theme.colors.helper};
  }
`
const Navbar = () => {
  return (
    <Nav>
      <div className='menuIcon'>
        <ul className='navbar-list'>
          <li>
            <NavLink className="navbar-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/service">Services</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">Contact</NavLink>
          </li>
        </ul>

      </div>
    </Nav>
  )
}

export default Navbar