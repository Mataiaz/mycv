import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import './Navbar.css';
import { useAuthContext } from '../hooks/useAuthContext';

function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const handleLogout = () => {
    logout()
  };
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            My CV
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
              <Link to='/AboutMe' className='nav-links' onClick={closeMobileMenu}>
                About me
              </Link>
              {user && (
                <div>
                  <span>{user.email}</span>
                  <button onClick={handleLogout}>Log out</button>
                </div>
              )}
              {!user && (
                <div className='nav-item'>
              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                Login in!
              </Link>
              <Link to='/signup' className='nav-links' onClick={closeMobileMenu}>
                Sign up!
              </Link>
              </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;