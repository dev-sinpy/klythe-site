import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

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
            <li className="navbar-item">
              <a href="#home" className="navbar-link" data-nav-link>
                Home
              </a>
            </li>

            <li className="navbar-item">
              <a href="#service" className="navbar-link" data-nav-link>
                Services
              </a>
            </li>

            <li className="navbar-item">
              <a href="#feature" className="navbar-link" data-nav-link>
                Features
              </a>
            </li>

            <li className="navbar-item">
              <a href="#project" className="navbar-link" data-nav-link>
                Portfolio
              </a>
            </li>

            <li className="navbar-item">
              <a href="#blog" className="navbar-link" data-nav-link>
                Blog
              </a>
            </li>
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
