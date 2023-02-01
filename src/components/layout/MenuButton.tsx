import React, {useContext} from 'react'
import { MyContext } from '@/context/MyContex';

const MenuButton = () => {
    const {isMenuOpen, toggleMenu}=useContext(MyContext);
    
  return (
    <>
      <button 
        className={`hamburger hamburger--squeeze ${
          isMenuOpen ? "is-active" : ""
        } `}
        onClick={toggleMenu}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <style jsx>{`
        .hamburger-box *, .hamburger-box *::after, .hamburger-box *::before {
          background-color: var(--green);
        }
      `}</style>
    </>
  );
}

export default MenuButton