import { NavLink, useLocation } from 'react-router-dom';
import Dropdown from './Dropdown';
import { recordings } from '../data';

function OffCanvasContent() {
  const { pathname } = useLocation();

  const pbWebFun = recordings.filter(
    (recording) => recording.week === 1 || recording.week === 2
  );

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
