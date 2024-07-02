import { NavLink } from 'react-router-dom';

function Dropdown({ title }) {
  return (
    <div className="button-group dropend">
      <button
        className="btn btn-dark dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        {title}
      </button>
      <ul className="dropdown-menu">
        <li>
          <NavLink className="dropdown-item" to="/weeks/1" end>
            Week 1
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/weeks/2" end>
            Week 2
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
