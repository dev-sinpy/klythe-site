import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { NavBarLinkPropsInterface, NavBarLink } from '../NavBarLink';

const NavBarLinkData: NavBarLinkPropsInterface[] = [
  {
    link: "#home",
    title: "Home"
  },
  {
    link: "#service",
    title: "Services"
  },
  {
    link: "#feature",
    title: "Features"
  },
  {
    link: "#project",
    title: "Portfolio"
  },
  {
    link: "#aboutus",
    title: "About Us"
  },  
  {
    link: "#blog",
    title: "Blog"
  },

]
const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const isHeaderActive = () => {
    if (typeof window === 'undefined') return;

    return window.scrollY > 80;
  };

  return ( 
    <header className={`header ${isHeaderActive() ? 'active' : ''}`} data-header>
      <div className="container">
        <a href="#" className="logo">
          Klythe
        </a>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
          <div className="wrapper">
            <a href="#" className="logo">
              Klythe
            </a>

            <button
              onClick={() => {
                setIsNavOpen(false);
              }}
              className="nav-close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <ul className="navbar-list">
            {NavBarLinkData.map((item, index) => {
              return <li key={index} className="navbar-item">
                <NavBarLink {...item} />
              </li>
            })}
          </ul>
        </nav>

        <button
          onClick={() => {
            setIsNavOpen(true);
          }}
          className="nav-open-btn"
          aria-label="open menu"
          data-nav-toggler
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <a href="#" className="btn btn-primary has-before has-after">
          Let’s Talk 👋
        </a>

        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
};

export { Header };
