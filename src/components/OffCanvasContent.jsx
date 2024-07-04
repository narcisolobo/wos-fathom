import { NavLink, useLocation } from 'react-router-dom';
import Dropdown from './Dropdown';

function OffCanvasContent() {
  const { pathname } = useLocation();

  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <NavLink
          end
          to="/"
          className="nav-link"
          aria-current={`${pathname === '/' ? 'page' : 'false'}`}>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <Dropdown title="PB / Web Fun" />
      </li>
    </ul>
  );
}

export default OffCanvasContent;
