import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

function Header() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-3">
          <HamburgerMenu />
          <Link className="navbar-brand fs-2" href="/">
            Fathom Recordings - WOS
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
