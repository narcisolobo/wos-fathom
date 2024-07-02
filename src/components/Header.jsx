import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Fathom Recordings - WOS
        </Link>
      </div>
    </nav>
  );
}

export default Header;
